import React, { useState } from "react";
import { uid } from "uid";

const Template = ({ onSeletecTemplate }) => {
  // null, 1, 2
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const layer1 = [
    {
      rgb: { r: 40, g: 159, b: 237, a: 1 },
      shiftRight: 5,
      shiftDown: 5,
      spread: 0,
      blur: 0,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 95, g: 184, b: 255, a: 1 },
      shiftRight: 10,
      shiftDown: 10,
      spread: 0,
      blur: 0,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 161, g: 216, b: 255, a: 1 },
      shiftRight: 15,
      shiftDown: 15,
      spread: 0,
      blur: 0,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 202, g: 230, b: 255, a: 1 },
      shiftRight: 20,
      shiftDown: 20,
      spread: 0,
      blur: 0,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 255, g: 238, b: 255, a: 1 },
      shiftRight: 25,
      shiftDown: 25,
      spread: 0,
      blur: 0,
      opacity: 100,
      inset: false,
      id: uid(),
    },
  ];

  const layer2 = [
    {
      rgb: { r: 255, g: 255, b: 255, a: 1 },
      shiftRight: -1,
      shiftDown: 0,
      spread: 0,
      blur: 4,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 255, g: 255, b: 0, a: 1 },
      shiftRight: -2,
      shiftDown: 0,
      spread: 0,
      blur: 10,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 255, g: 128, b: 0, a: 1 },
      shiftRight: -10,
      shiftDown: 0,
      spread: 0,
      blur: 20,
      opacity: 100,
      inset: false,
      id: uid(),
    },
    {
      rgb: { r: 255, g: 0, b: 0, a: 1 },
      shiftRight: -18,
      shiftDown: 0,
      spread: 0,
      blur: 40,
      opacity: 100,
      inset: false,
      id: uid(),
    },
  ];

  const templates = [layer1, layer2];

  const handleSelectTemlate = (value) => {
    if (!currentTemplate) {
      onSeletecTemplate(templates[value - 1]);
      setCurrentTemplate(value);
      return;
    }

    if (currentTemplate === value) {
      onSeletecTemplate(templates[value - 1].reverse());
      setCurrentTemplate(null);
      return;
    }

    onSeletecTemplate(templates[value - 1]);
    setCurrentTemplate(value);
  };

  return (
    <div className="w-full h-fit bg-white shadow rounded">
      <h2 className="px-5 pt-5 text-base font-semibold">Template</h2>
      <div className="p-5">
        <div className="my-2.5 flex items-center gap-x-[15px]">
          <div
            onClick={() => handleSelectTemlate(1)}
            className="w-[50px] h-[50px] bg-[#79dff1] cursor-pointer hover:border hover:border-[#90f]"
            style={{
              boxShadow:
                "5px 5px 0 0 #289fed, 10px 10px 0 0 #5fb8ff, 15px 15px 0 0 #a1d8ff, 20px 20px 0 0 #cae6ff, 25px 25px 0 0 #e1eeff, inset 5px 5px 1px 14px transparent",
            }}
          ></div>
          <div
            onClick={() => handleSelectTemlate(2)}
            className="w-[50px] h-[50px] bg-[#79dff1] cursor-pointer hover:border hover:border-[#90f]"
            style={{
              boxShadow:
                "0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px red, inset 5px 5px 1px 14px transparent",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
