import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function FormInputs({ register, name, type, placeholder, errors }) {
  return (
    <div className="w-full">
      <Label htmlFor={name} className="capitalize mb-1 font-bold block">
        {name}
      </Label>
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full overflow-x-auto text-ellipsis ${errors?.[name] ? "border-red-500" : ""}`}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInputs;
