import { CircularProgress } from "@mui/material";
import { Button } from "components";
import React from "react";

import frameBlack from "assets/images/frame_black.png";
import frameWhite from "assets/images/frame_white.png";
import frameNone from "assets/images/frame_none.png";

interface Props {
  first?: boolean;
  url?: string;
  frameType?: string;
  loading?: boolean;
  onClick: any;
  onCrop?: any;
  onRemove?: any;
  widthGreater?: boolean;
}

const mapping: any = {
  "": {},
  blackBorder: {
    frame: frameBlack,
    imgSize: "70%",
  },
  black: {
    frame: frameBlack,
    imgSize: "calc(100% - 4px)",
  },
  whiteBorder: {
    frame: frameWhite,
    imgSize: "70%",
  },
  white: {
    frame: frameWhite,
    imgSize: "calc(100% - 4px)",
  },
  noFrame: {
    frame: frameNone,
    imgSize: "100%",
  },
};

const UploadImage: React.FC<Props> = ({
  first,
  url,
  loading,
  onClick,
  onCrop,
  onRemove,
  frameType = "",
  widthGreater,
}) => {
  const { frame, imgSize } = mapping[frameType];

  const handleClick = (e: any, callback: any) => {
    e.stopPropagation();
    callback?.();
  };

  return (
    <div className={`UploadImage ${first ? "first" : "tileAppear"}`}>
      {url ? (
        <div className="UploadImage-btn MuiButton-root no-radius" onClick={onCrop}>
          <img className="image-frame" alt="" src={frame.src} />
          <div className="image-wrapper">
            <div style={{ width: imgSize, height: imgSize }}>
              <img className={widthGreater ? "height" : "width"} alt="" src={url} />
            </div>
            <div className={`overlay${loading ? " loading" : ""}`}>
              {loading ? (
                <CircularProgress thickness={5} size={32} color="inherit" />
              ) : (
                <>
                  <div className="overlay-btn btn-crop" onClick={(e) => handleClick(e, onCrop)} title="Cắt ảnh">
                    <i className="icon icon-crop" />
                  </div>
                  <div className="overlay-btn btn-remove" onClick={(e) => handleClick(e, onRemove)} title="Xóa ảnh">
                    <i className="icon icon-remove" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Button onClick={onClick} className="UploadImage-btn" variant="contained" color="primary">
          <div className="upload">
            {first ? (
              <>
                <i className="fas fa-camera" />
                <div>Tải ảnh lên</div>
              </>
            ) : (
              <div className="icon icon-plus" />
            )}
          </div>
        </Button>
      )}
    </div>
  );
};

export default UploadImage;
