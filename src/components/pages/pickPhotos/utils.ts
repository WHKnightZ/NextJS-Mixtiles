import APIRequest from "services/api";
import { createFileName, randomId } from "utils";
import { FULL_SIZE } from "./constants";

export const uploadImage = (file: any, onSuccess: (url: string) => void) =>
  APIRequest.get("/api/v1/upload", { prefix: "mixtiles", file_name: createFileName(file.name) }, ({ status, data }) => {
    if (status) {
      const { file_link, upload_link } = data;
      const myHeaders = new Headers();
      myHeaders.append("x-amz-acl", "public-read");
      // if (contentType) myHeaders.append('content-type', contentType)

      const requestOptions: any = {
        method: "PUT",
        headers: myHeaders,
        body: file,
        redirect: "follow",
      };

      fetch(upload_link, requestOptions)
        .then((response) => response.text())
        .then(() => onSuccess(file_link || ""))
        .catch((error) => console.log("error", error));
    }
  });

const createImage = (url: string) =>
  new Promise((resolve) => {
    const image = new Image();
    image.setAttribute("crossorigin", "anonymous");
    image.onload = () => resolve(image);
    image.src = url;
  });

export const getCroppedImg = async (imageSrc: any, crop: any) => {
  const image = (await createImage(imageSrc)) as HTMLImageElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = FULL_SIZE;
  canvas.height = FULL_SIZE;

  ctx?.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, FULL_SIZE, FULL_SIZE);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const file = new File([blob as any], `${randomId()}.jpg`);
      console.log(file);

      resolve(file);
    }, "image/jpeg");
  });
};
