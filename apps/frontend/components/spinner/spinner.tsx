import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Spinner() {
  return (
    <div>
      <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
    </div>
  );
}
