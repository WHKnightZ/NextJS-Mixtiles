import React from "react";

import iconBlackBorder from "assets/images/icon_black_border.png";
import iconBlack from "assets/images/icon_black.png";
import iconWhiteBorder from "assets/images/icon_white_border.png";
import iconWhite from "assets/images/icon_white.png";
import iconNoFrame from "assets/images/icon_no_frame.png";

interface Props {
  selected: string;
  setSelected: any;
  small?: boolean;
}

const mappingFrameIcon: any = {
  blackBorder: { img: iconBlackBorder, label: "Đen viền" },
  black: { img: iconBlack, label: "Đen" },
  whiteBorder: { img: iconWhiteBorder, label: "Trắng viền" },
  white: { img: iconWhite, label: "Trắng" },
  noFrame: { img: iconNoFrame, label: "Không khung" },
};

const frameTypes = ["blackBorder", "black", "whiteBorder", "white", "noFrame"];

const PickFrames: React.FC<Props> = ({ selected, setSelected, small }) => {
  return (
    <div className={`PickFrames${small ? " small" : ""}`}>
      {frameTypes.map((item) => {
        const { img, label } = mappingFrameIcon[item];

        return (
          <div
            key={item}
            className={`PickFrame${selected === item ? " selected" : ""}`}
            onClick={() => setSelected(item)}
          >
            <img alt="" src={img.src} />
            <div>{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PickFrames;
