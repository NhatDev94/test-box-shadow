import React, { useState } from "react";
import ColorPicker from "./colorPicker/ColorPicker";

const Preview = ({ boxShadow }) => {
  const [color, setColor] = useState("#3d9df6");
  const [bg, setBg] = useState("#ffffff");

  const handeChange = (value, type) => {
    const hex = "#" + value.toHex();
    type === "bg" ? setBg(hex) : setColor(hex);
  };

  return (
    <div className="w-full h-fit bg-white shadow rounded z-50">
      <div className="w-full flex items-center justify-between p-4">
        <h2 className="text-base font-semibold">Preview</h2>
        <div className="flex items-center gap-x-2.5">
          <div>
            <ColorPicker
              value={bg}
              onChange={(value) => handeChange(value, "bg")}
            />
          </div>
          <div>
            <ColorPicker
              value={color}
              onChange={(value) => handeChange(value, "color")}
            />
          </div>
        </div>
      </div>

      <div className="w-full p-10" style={{ background: bg }}>
        <div
          className="w-50 h-50"
          style={{ background: color, boxShadow }}
        ></div>
      </div>
    </div>
  );
};

export default Preview;
