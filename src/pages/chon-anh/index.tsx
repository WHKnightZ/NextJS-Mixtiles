import { Button, Layout, ModalCrop, PickFrames, UploadImage, uploadImage } from "components";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { getLsPhotos, randomId, saveLsPhotos } from "utils";

const PickPhotos: NextPage = () => {
  const inputRef = useRef<any>();

  const [images, setImages] = useState<
    {
      id: string;
      url: string;
      loading: boolean;
      minZoom: number;
      maxZoom: number;
      zoom: number;
      widthGreater: boolean;
      croppedUrl?: string;
      crop?: { x: number; y: number };
    }[]
  >([]);
  const [modalCrop, setModalCrop] = useState<any>({ show: false, url: "" });
  const [frameType, setFrameType] = useState("blackBorder");

  useEffect(() => {
    const { frameType: defaultFrameType, images: defaultImages } = getLsPhotos();
    setImages(defaultImages || []);
    setFrameType(defaultFrameType || "blackBorder");
  }, []);

  const handleUploadFile = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = () => {
      // Width greater to determine width or height must be zoomed in
      const widthGreater = image.width > image.height;
      const index = images.length;
      let zoom = image.width / image.height;
      if (!widthGreater) zoom = 1 / zoom;
      const maxZoom = zoom * 2.4;

      setImages((images) => [
        ...images,
        { id: randomId(), url, loading: true, widthGreater, zoom, minZoom: zoom, maxZoom },
      ]);

      uploadImage(file, (url) => {
        setImages((images) => {
          const newImages = [...images];
          newImages[index].loading = false;
          newImages[index].url = url;
          return newImages;
        });
      });
    };

    e.target.value = null;
  };

  const inputClick = () => inputRef.current.click();

  useEffect(() => {
    // Save images, type to local storage every time it be changed
    saveLsPhotos({
      frameType: frameType,
      images: images.filter((i) => !i.loading),
    });
  }, [images, frameType]);

  return (
    <Layout title="Chọn ảnh" grayBackground>
      <div className="PickPhotos">
        <ModalCrop
          {...modalCrop}
          onClose={() => setModalCrop({ ...modalCrop, show: false })}
          onConfirm={(url, zoom, crop) => {
            setImages((images) => {
              const newImages = [...images];
              const image = newImages.find((i) => i.id === modalCrop.id);
              if (image) {
                image.crop = crop;
                image.zoom = zoom;
                image.croppedUrl = url;
              }
              return newImages;
            });
          }}
        />
        <div className="menu">
          <PickFrames selected={frameType} setSelected={setFrameType} />
          <Button variant="contained" size="large" fullWidth style={{ borderRadius: 8, marginTop: 24 }}>
            Đặt hàng
          </Button>
        </div>

        <div className="main">
          {images.length > 0 ? (
            <div className="PickPhotos-images">
              {images.map((image) => (
                <UploadImage
                  key={image.id}
                  onClick={inputClick}
                  frameType={frameType}
                  {...image}
                  url={image.croppedUrl || image.url}
                  onCrop={() => setModalCrop({ show: true, ...image })}
                  onRemove={() => setImages((images) => images.filter((i) => i.id !== image.id))}
                />
              ))}
              <UploadImage onClick={inputClick} />
            </div>
          ) : (
            <div className="PickPhotos-getStarted">
              <div className="pick-photos-text">Chọn vài bức ảnh để bắt đầu</div>
              <UploadImage first onClick={inputClick} />
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/x-png,image/jpeg"
          style={{ display: "none" }}
          onChange={handleUploadFile}
        />
      </div>
    </Layout>
  );
};

export default PickPhotos;
