import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function TextAreaInput({ register, name, type, placeholder, errors }) {
  return (
    <div className="w-full">
      <Label htmlFor={name} className="capitalize mb-1 font-bold block">
        {name}
      </Label>
      <Textarea
        {...register(name)}
        type={type}
        rows={5}
        placeholder={placeholder}
        className={`w-full resize-y overflow-auto break-words break-all whitespace-pre-wrap ${errors?.[name] ? "border-red-500" : ""}`}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export default TextAreaInput;
