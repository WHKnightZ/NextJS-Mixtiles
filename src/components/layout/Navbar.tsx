import Button from "../button/Button";
import PickFrames from "../pickFrames/PickFrames";
import Link from "next/link";
import React from "react";
import AccountPopover from "./AccountPopover";

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
          <Button className="Navbar-menu">
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
