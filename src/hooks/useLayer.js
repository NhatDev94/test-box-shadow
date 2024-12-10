import { useEffect, useState } from "preact/hooks";
import { uid } from "uid";

const useLayer = () => {
  const defaultLayer = {
    rgb: { r: 0, g: 0, b: 0, a: 1 },
    shiftRight: 0,
    shiftDown: 0,
    spread: 3,
    blur: 5,
    opacity: 20,
    inset: false,
  };
  const [layers, setLayers] = useState([{ ...defaultLayer, id: uid() }]);
  const [currentLayer, setCurrentLayer] = useState({});

  const updateLayersAndLayerState = (name, value) => {
    const newLayer = { ...currentLayer };
    newLayer[name] = value;
    setLayers(
      layers.map((item) => (item.id === currentLayer.id ? newLayer : item))
    );
    setCurrentLayer(newLayer);
  };

  const handleSliderChange = (value, name) => {
    updateLayersAndLayerState(name, value);
  };

  const handleColorChange = (value) => {
    const rgb = value.toRgb();
    updateLayersAndLayerState("rgb", rgb);
  };

  const handleLayerAdd = () => {
    setLayers([...layers, { ...defaultLayer, id: uid() }]);
  };

  const handleSelectLayer = (layer) => {
    setCurrentLayer(layer);
  };

  const handleToggleInset = () => {
    updateLayersAndLayerState("inset", !currentLayer.inset);
  };

  const handleSelectTemplate = (template) => {
    setLayers(template);
    setCurrentLayer(template[0]);
  };

  const handleDeleteLayer = (layer) => {
    if (layers.length < 2) return;

    const newLayers = layers.filter((item) => item.id !== layer.id);
    setLayers(newLayers);

    if (layer.id === currentLayer.id) {
      setCurrentLayer(newLayers[0]);
    }
  };

  useEffect(() => {
    setCurrentLayer(layers[0]);
  }, []);
  return {
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
  };
};

export default useLayer;
