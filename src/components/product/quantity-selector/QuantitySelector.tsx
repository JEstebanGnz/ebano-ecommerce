"use client";

import { Size } from "@/app/interfaces";
import clsx from "clsx";
import React, { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {}

export const QuantitySelector = ({}: Props) => {
  const [quantity, setQuantity] = useState(1);

  function onQuantityChanged(value: number) {
    if (quantity + value >= 1 && quantity + value <= 5) {
      setQuantity(quantity + value);
    }
  }

  return (
    <>
      <div className="flex mt-5">
        <button onClick={() => onQuantityChanged(-1)}>
          <IoRemoveCircleOutline size={30} />
        </button>

        <span className="w-20 mx-3 px-3 bg-green-200 text-center rounded">
          {" "}
          {quantity}{" "}
        </span>

        <button onClick={() => onQuantityChanged(+1)}>
          <IoAddCircleOutline size={30} />
        </button>
      </div>
    </>
  );
};
