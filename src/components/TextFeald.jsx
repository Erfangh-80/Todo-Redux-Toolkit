import React from "react";

const TextFeald = ({ nameId, label, onChange, value, inputProps, onFocus }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 mt-3 text-base text-gray-800">{label}</label>
      <input
        id={nameId}
        type="text"
        className="bg-gray-500 placeholder-gray-400 text-white py-2 px-3 border-2 outline-none rounded"
        onChange={onChange}
        onFocus={onFocus}
        {...inputProps}
        value={value}
      />
    </div>
  );
};

export default TextFeald;
