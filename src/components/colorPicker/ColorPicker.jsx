import React from "react";
import { ColorPicker as ColorPickerAnt } from "antd";

import "./index.css";

const ColorPicker = ({ value = "1677ff", onChange, defaultFormat = "hex" }) => {
  return (
    <ColorPickerAnt
      value={value}
      defaultFormat={defaultFormat}
      onChange={onChange}
    />
  );
};

export default ColorPicker;
