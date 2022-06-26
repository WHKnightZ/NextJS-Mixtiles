import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

interface Props {
  title?: string;
  description?: string;
  grayBackground?: boolean;
  pickFrames?: {
    selected: string;
    setSelected: any;
  };
  mobileBtnBottom?: any;
}

const Layout: React.FC<Props> = ({ title, description, grayBackground, children, pickFrames, mobileBtnBottom }) => {
  return (
    <>
      <Head>
        <title>Mixtiles - {title ? title : "Khung ảnh thông minh"}</title>
        <meta name="description" content={description || "Mixtiles - Khung ảnh thông minh"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Layout">
        <Navbar pickFrames={pickFrames} />
        <div className="Main">
          <div className={`Container${grayBackground ? " background-gray" : ""}`}>
            <Container>{children}</Container>
          </div>
        </div>
        {!!mobileBtnBottom && <div className="MobileBtnButton">{mobileBtnBottom}</div>}
      </div>
    </>
  );
};

export default Layout;
