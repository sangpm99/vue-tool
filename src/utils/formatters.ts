import NoImage from "@/assets/images/error/no-image.jpg";
import Ps from "@/assets/images/error/ps-file-placeholder.jpg";
import Zip from "@/assets/images/zip-placeholder.png";

export const resolveImage = (url: string | null): string => {
  const arr = url?.split(".") || [];
  if (arr[arr.length - 1]) {
    if (arr[arr.length - 1] === "psd") {
      return Ps;
    }

    if (arr[arr.length - 1] === "zip" || arr[arr.length - 1] === "rar") {
      return Zip;
    }
  } else {
    return NoImage;
  }
  return url ?? "";
};

export const capitalizeText = (text: string) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(/[\s,_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const removeEmptyField = (params: any) => {
  return Object.fromEntries(
    Object.entries({ ...params }).filter(
      ([, value]) =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0),
    ),
  );
};

export const changeInvalidFieldToNull = (params: any) => {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      value === "" ||
      value === 0 ||
      value === "0" ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
        ? null
        : value,
    ]),
  );
};

export const shortScale = (num: number): string => {
  const unitlist = ["", "K", "M", "G"];
  const sign: number = Math.sign(num);
  let unit = 0;

  while (Math.abs(num) >= 1000) {
    unit = unit + 1;
    num = Math.floor(Math.abs(num) / 100) / 10;
  }
  return sign * Math.abs(num) + unitlist[unit];
};
