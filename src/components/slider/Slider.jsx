import React from "react";
import { Slider as SliderAnt } from "antd";

import "./index.css";

const Slider = ({ title, name, range = [0, 100], value = 0, onChange }) => {
  const handleChange = (value) => {
    onChange(value, name);
  };
  return (
    <div className="w-full mt-[1.6rem]">
      <h4 className=" text-sm font-normal">{title}</h4>

      <SliderAnt
        min={range[0]}
        max={range[1]}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Slider;
