import Button from "../button/Button";
import PickFrames from "../pickFrames/PickFrames";
import Link from "next/link";
import React from "react";
import AccountPopover from "./AccountPopover";
import { createToast } from "../toast/createToast";

interface Props {
  pickFrames?: {
    selected: string;
    setSelected: any;
  };
}

const Navbar: React.FC<Props> = ({ pickFrames }) => {
  return (
    <div className={`Navbar${pickFrames ? " hasPickFrames" : ""}`}>
      <div className="Navbar-wrapper">
        <div className="Navbar-inside">
          <Button
            className="Navbar-menu"
            onClick={() => createToast({ type: Math.random() > 0.5, duration: Math.random() * 3000 + 2000 })}
          >
            <i className="icon-bars" />
          </Button>
          <div className="Navbar-logo">
            <Link href="/">Mixtiles</Link>
          </div>
          <AccountPopover />
        </div>
        {!!pickFrames && (
          <div className="Navbar-pickFrames">
            <PickFrames selected={pickFrames.selected} setSelected={pickFrames.setSelected} small />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
