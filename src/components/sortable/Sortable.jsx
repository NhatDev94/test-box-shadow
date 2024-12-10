import React from "react";
import { ReactSortable } from "react-sortablejs";
import { toBoxShadowString } from "../../utils/dropdownRender";
import grip_vertical from "../../assets/svg/grip_vertical.svg";
import grip_vertical_white from "../../assets/svg/grip_vertical_white.svg";
import edit from "../../assets/svg/edit.svg";
import edit_white from "../../assets/svg/edit_white.svg";
import trash from "../../assets/svg/trash.svg";
import trash_white from "../../assets/svg/trash_white.svg";

const Sortable = ({ list, setList, currentLayer, onSelect, onDelete }) => {
  const handleDelete = (e, layer) => {
    e.stopPropagation();
    onDelete(layer);
  };
  return (
    <ReactSortable list={list} setList={setList}>
      {list.map((item, i) => {
        const isActive = item.id === currentLayer.id;
        return (
          <div
            key={i}
            className="text-sm mb-2 w-full h-10 flex items-center justify-between px-2.5 py-25 cursor-pointer transition-['background'] duration-300 select-none"
            onClick={() => onSelect(item)}
            style={{
              background: isActive ? "#5c6ac4" : "transparent",
              color: isActive ? "white" : "black",
            }}
          >
            <div className="flex items-center">
              <img
                src={isActive ? grip_vertical_white : grip_vertical}
                alt="icon"
                className="w-2.5 h-4"
              />
              <p className="pl-2.5 text-ellipsis line-clamp-1">
                {toBoxShadowString(item, false)}
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <img
                src={isActive ? edit_white : edit}
                alt="edit"
                className="w-3 h-5"
              />
              <img
                onClick={(e) => handleDelete(e, item)}
                src={isActive ? trash_white : trash}
                alt="delete"
                className="w-3 h-5"
              />
            </div>
          </div>
        );
      })}
    </ReactSortable>
  );
};

export default Sortable;
