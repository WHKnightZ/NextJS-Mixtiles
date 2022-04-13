import { Button } from "components";
import Link from "next/link";
import React from "react";
import AccountPopover from "./AccountPopover";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-inside">
        <Button className="Navbar-menu">
          <i className="fas fa-bars" />
        </Button>
        <div className="Navbar-logo">
          <Link href="/">Mixtiles</Link>
        </div>
        <AccountPopover />
      </div>
      {/* <div>
        <PickFrames selected="blackBorder" setSelected={() => {}} small />
      </div> */}
    </div>
  );
};

export default Navbar;
