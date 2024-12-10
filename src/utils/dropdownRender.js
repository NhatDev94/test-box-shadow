export const rgbaObjToString = (rgba) => {
  if (!rgba) return "";
  return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
};

export const toBoxShadowString = (layer, isToCss = true) => {
  if (!layer) return "";
  const rgba = { ...layer.rgb, a: layer.opacity / 100 };
  const rgbaString = rgbaObjToString(rgba);
  if (isToCss) {
    return `${rgbaString} ${layer.shiftRight}px ${layer.shiftDown}px ${
      layer.blur
    }px ${layer.spread}px${layer.inset ? " inset" : ""}`;
  }

  return `${layer.inset ? "inset " : ""}${layer.shiftRight}px ${
    layer.shiftDown
  }px ${layer.blur}px ${layer.spread}px ${rgbaString}`;
};

export const toCompletedBoxShadow = (layers) => {
  let string = toBoxShadowString(layers[0]);
  if (layers.length > 1) {
    layers.map((layer, i) => {
      if (i !== 0) string = string + "," + toBoxShadowString(layer);
    });
  }
  return string;
};
