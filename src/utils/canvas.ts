import { FULL_SIZE } from "configs/constants";
import { randomId } from "./common";

export const drawRoundedImage = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  radius: number,
  width?: number,
  height?: number
) => {
  if (!image) return;
  if (!width) width = image.width;
  if (!height) height = image.height;
  ctx.save();

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  ctx.clip();
  ctx.drawImage(image, x, y, width, height);

  ctx.restore();
};

export const resizeImage = (dataUrl: any, newWidth: number, newHeight: number, callback: (file: any) => void) => {
  const image = new Image();
  image.src = dataUrl;

  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext("2d") as any;
    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    canvas.toBlob(
      (blob: any) => {
        const file = new File([blob], "file.png");
        callback(file);
      },
      "image/png",
      0.85
    );
  };
};

const createImage = (url: string) =>
  new Promise((resolve) => {
    const image = new Image();
    image.setAttribute("crossorigin", "anonymous");
    image.onload = () => resolve(image);
    image.src = url;
  });

export const getCroppedUrl = async (imageSrc: any, crop: any) => {
  const image = (await createImage(imageSrc)) as HTMLImageElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = FULL_SIZE;
  canvas.height = FULL_SIZE;

  ctx?.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, FULL_SIZE, FULL_SIZE);

  return canvas.toDataURL("image/jpeg");
};

export const getFileFromImage = async (imageSrc: any) => {
  const image = (await createImage(imageSrc)) as HTMLImageElement;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx?.drawImage(image, 0, 0, image.width, image.height);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      const file = new File([blob as any], `${randomId()}.jpg`, { type: "image/jpg" });

      resolve(file);
    }, "image/jpeg");
  });
};
