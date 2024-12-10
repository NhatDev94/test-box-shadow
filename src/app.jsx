import BoxShadowCssGenerator from "./components/BoxShadowCssGenerator";
import CssCode from "./components/CssCode";
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import Template from "./components/Template";
import { toCompletedBoxShadow } from "./utils/dropdownRender";
import useLayer from "./hooks/useLayer";

export function App() {
  const {
    layers,
    setLayers,
    currentLayer,
    handleSliderChange,
    handleColorChange,
    handleLayerAdd,
    handleSelectLayer,
    handleToggleInset,
    handleDeleteLayer,
    handleSelectTemplate,
  } = useLayer();

  const code = toCompletedBoxShadow(layers);
  return (
    <div className="w-screen h-full min-h-[100dvh] bg-[#f4f6f8] py-5">
      <Nav />

      <div className="w-full lg:w-[954px] mx-auto sm:px-5 lg:px-0 mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="col-span-1">
          <BoxShadowCssGenerator
            layers={layers}
            currentLayer={currentLayer}
            setLayers={setLayers}
            onSliderChange={handleSliderChange}
            onColorChange={handleColorChange}
            onLayerAdd={handleLayerAdd}
            onSelect={handleSelectLayer}
            onToggleInset={handleToggleInset}
            onDelete={handleDeleteLayer}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <Preview boxShadow={code} />
          <CssCode code={code} />
          <Template onSeletecTemplate={handleSelectTemplate} />
        </div>
      </div>
    </div>
  );
}
