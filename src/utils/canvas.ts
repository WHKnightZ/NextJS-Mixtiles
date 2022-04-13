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
