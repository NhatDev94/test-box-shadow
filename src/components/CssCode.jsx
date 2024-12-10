import React from "react";

const CssCode = ({ code }) => {
  return (
    <div className="w-full h-fit bg-white shadow rounded">
      <h2 className="px-5 pt-5 text-base font-semibold">CSS Code</h2>

      <div className="w-full p-5 text-sm text-[#212b36]">
        <code className="whitespace-pre-wrap">box-shadow: {code};</code>
      </div>
    </div>
  );
};

export default CssCode;
