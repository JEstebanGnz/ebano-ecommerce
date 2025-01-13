import { Size } from "@/app/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({selectedSize, availableSizes}: Props) => {

  return (
    <>
      <div>
        {" "}
        {availableSizes.map((size) => (
          <span key={size} className={clsx("mx-3 hover:underline", {
            'underline' : size === selectedSize
          }
          )}> {size} </span>
        ))}{" "}
      </div>
    </>
  );
};
