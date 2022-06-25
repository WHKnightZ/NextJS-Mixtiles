import { Drawer } from "@mui/material";
import { Button, Layout, ModalCrop, PickFrames, UploadImage } from "components";
import { apiUrls } from "configs/apis";
import type { NextPage } from "next";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useApis } from "services/api";
import { getFileFromImage, getLsPhotos, randomId, saveLsPhotos } from "utils";

const PickPhotos: NextPage = () => {
  const inputRef = useRef<any>();
  const { apiPost } = useApis();

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
  const [drawerActions, setDrawerActions] = useState<{ show: boolean; image: any }>({ show: false, image: {} });
  const [frameType, setFrameType] = useState("blackBorder");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { frameType: defaultFrameType, images: defaultImages } = getLsPhotos();
    setImages(defaultImages || []);
    setFrameType(defaultFrameType || "blackBorder");
  }, []);

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = () => {
      // Width greater to determine width or height must be zoomed in
      const widthGreater = image.width > image.height;
      let zoom = image.width / image.height;
      if (!widthGreater) zoom = 1 / zoom;
      const maxZoom = zoom * 2.4;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);

      setImages((images) => [
        ...images,
        {
          id: randomId(),
          url: canvas.toDataURL("image/jpeg"),
          loading: false,
          widthGreater,
          zoom,
          minZoom: zoom,
          maxZoom,
        },
      ]);
    };

    e.target.value = null as any;
  };

  const inputClick = () => inputRef.current.click();

  useEffect(() => {
    // Save images, type to local storage every time it be changed
    saveLsPhotos({
      frameType: frameType,
      images: images.filter((i) => !i.loading),
    });
  }, [images, frameType]);

  const handleOrder = async () => {
    if (!images.length) {
      // Show popup
      return;
    }
    console.log(images);

    setLoading(true);

    const files = await Promise.all(images.map((i) => getFileFromImage(i.croppedUrl || i.url)));

    apiPost(
      apiUrls.orders(),
      {
        "files.image": files,
        data: JSON.stringify({
          fullname: "Nguyễn Chaos Khánh",
          email: "nguyenkhanhsl1997@gmail.com",
          address: "Ha Noi",
        }),
      },
      ({ status }) => {
        setLoading(false);

        if (status) {
        }
      },
      { successMessage: "Đặt hàng thành công!" }
    );
  };

  const btnOrder = (
    <Button className="btnOrder" variant="contained" size="large" fullWidth onClick={handleOrder} loading={loading}>
      Đặt hàng
    </Button>
  );

  const handleOpenDrawerActions = (image: any) => setDrawerActions({ show: true, image });
  const handleCloseDrawerActions = () => setDrawerActions({ ...drawerActions, show: false });
  const handleShowModalCrop = (image: any) => setModalCrop({ show: true, ...image });
  const handleRemove = (image: any) => setImages((images) => images.filter((i) => i.id !== image.id));

  return (
    <Layout
      title="Chọn ảnh"
      grayBackground
      pickFrames={{ selected: frameType, setSelected: setFrameType }}
      mobileBtnBottom={btnOrder}
    >
      <div className="PickPhotos">
        <Drawer
          anchor="bottom"
          open={drawerActions.show}
          onBackdropClick={handleCloseDrawerActions}
          className="PickPhotos-drawerActions"
        >
          <div className="PickPhotos-drawerActions__wrapper">
            <div
              onClick={() => {
                handleCloseDrawerActions();
                handleShowModalCrop(drawerActions.image);
              }}
            >
              <i className="icon-crop" />
              Cắt ảnh
            </div>
            <div
              onClick={() => {
                handleCloseDrawerActions();
                handleRemove(drawerActions.image);
              }}
            >
              <i className="icon-remove" />
              Xóa ảnh
            </div>
          </div>
        </Drawer>
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
          {btnOrder}
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
                  onCrop={() => handleShowModalCrop(image)}
                  onRemove={() => handleRemove(image)}
                  onOpenDrawerActions={() => handleOpenDrawerActions(image)}
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
