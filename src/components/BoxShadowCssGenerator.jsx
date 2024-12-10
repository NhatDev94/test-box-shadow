import React from "react";
import Slider from "./slider/Slider";
import ColorPicker from "./colorPicker/ColorPicker";
import { rgbaObjToString, toBoxShadowString } from "../utils/dropdownRender";
import { Checkbox } from "antd";
import Sortable from "./sortable/Sortable";

const BoxShadowCssGenerator = ({
  layers,
  currentLayer,
  setLayers,
  onSliderChange,
  onColorChange,
  onLayerAdd,
  onSelect,
  onToggleInset,
  onDelete,
}) => {
  return (
    <div className="w-full h-fit bg-white shadow rounded">
      <div className="w-full h-fit p-5">
        <h2 className="text-base font-semibold">Box-Shadow CSS Generator</h2>

        <Slider
          value={currentLayer.shiftRight}
          onChange={onSliderChange}
          title="Shift right"
          name="shiftRight"
          range={[-50, 50]}
        />
        <Slider
          value={currentLayer.shiftDown}
          onChange={onSliderChange}
          title="Shift down"
          name="shiftDown"
          range={[-50, 50]}
        />
        <Slider
          value={currentLayer.spread}
          onChange={onSliderChange}
          title="Spread"
          name="spread"
        />
        <Slider
          value={currentLayer.blur}
          onChange={onSliderChange}
          title="Blur"
          name="blur"
        />
        <Slider
          value={currentLayer.opacity}
          onChange={onSliderChange}
          title="Opacity"
          name="opacity"
        />

        <div className="">
          <Checkbox checked={currentLayer.inset} onChange={onToggleInset}>
            Inset
          </Checkbox>
        </div>

        <div className="mt-5">
          <ColorPicker
            value={rgbaObjToString(currentLayer.rgb)}
            defaultFormat="rgb"
            onChange={onColorChange}
          />
        </div>
      </div>

      <div className="w-full h-fit mt-4 border-t border-[#dfe3e8] p-5">
        <button
          onClick={onLayerAdd}
          className="outline-none py-[7px] px-4 border border-[#c4cdd5] text-[#212b36] rounded-[3px] text-sm font-normal hover:bg-[#f4f6f8]"
        >
          Add Layer
        </button>

        <div className="w-full mt-5">
          <Sortable
            list={layers}
            setList={setLayers}
            currentLayer={currentLayer}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxShadowCssGenerator;
