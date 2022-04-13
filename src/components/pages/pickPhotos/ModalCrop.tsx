import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "components";
import { DialogActions, DialogContent, Slider } from "@mui/material";
import Cropper from "react-easy-crop";
import { getCroppedImg, uploadImage } from "./utils";
import { CANVAS_SIZE } from "./constants";

import frameWhite from "assets/images/frame_white.png";

interface Props {
  show: boolean;
  url: string;
  zoom: number;
  crop: { x: number; y: number };
  minZoom: number;
  maxZoom: number;
  onClose: any;
  onConfirm: (url: string, zoom: number, crop: { x: number; y: number }) => void;
}

const ModalCrop: React.FC<Props> = ({
  show,
  url,
  crop: defaultCrop = { x: 0, y: 0 },
  onClose,
  onConfirm,
  zoom: defaultZoom,
  minZoom,
  maxZoom,
}) => {
  const ref = useRef<any>();
  const [crop, setCrop] = useState(defaultCrop);
  const [zoom, setZoom] = useState(defaultZoom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!show) return;

    setCrop(defaultCrop);
    setZoom(defaultZoom);
  }, [show]);

  // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  //   console.log(croppedArea, croppedAreaPixels)
  // }, [])

  const handleConfirm = async () => {
    setLoading(true);
    const file = await getCroppedImg(url, ref.current.getCropData().croppedAreaPixels);

    uploadImage(file, (url) => {
      setLoading(false);
      onConfirm(url, zoom, crop);
      onClose();
    });
  };

  return (
    <Modal title="Cắt ảnh" show={show} size="sm" onBackdropClick={onClose}>
      <DialogContent className="Scrollbar Modal-crop" style={{ paddingTop: 12 }}>
        <div className="image-frame-wrapper" style={{ width: CANVAS_SIZE + 6, height: CANVAS_SIZE + 6 }}>
          <img className="image-frame" alt="" src={frameWhite} />
          <div
            style={{
              position: "relative",
              width: CANVAS_SIZE,
              height: CANVAS_SIZE,
              margin: "0 auto",
              maxWidth: "100%",
            }}
          >
            <Cropper
              ref={ref}
              image={url}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              // onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropSize={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
              showGrid={false}
              minZoom={minZoom}
              maxZoom={maxZoom}
            />
          </div>
        </div>
        <div
          style={{
            padding: "30px 8px 8px",
            width: "100%",
            maxWidth: CANVAS_SIZE,
            margin: "0 auto",
          }}
        >
          <Slider
            value={zoom}
            min={minZoom}
            max={maxZoom}
            step={(maxZoom - minZoom) / 60}
            onChange={(_, value) => setZoom(value as any)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Hủy
        </Button>
        <Button variant="contained" onClick={handleConfirm} loading={loading}>
          Xong
        </Button>
      </DialogActions>
    </Modal>
  );
};

export default ModalCrop;
