import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

interface Props {
  title?: string;
  description?: string;
  grayBackground?: boolean;
}

const Layout: React.FC<Props> = ({ title, description, grayBackground, children }) => {
  return (
    <>
      <Head>
        <title>Mixtiles{title ? ` - ${title}` : ""}</title>
        <meta name="description" content={description || "Generated by create next app"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Layout">
        <Navbar />
        <div className="Main">
          <div className={`Container${grayBackground ? " background-gray" : ""}`}>
            <Container>{children}</Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;