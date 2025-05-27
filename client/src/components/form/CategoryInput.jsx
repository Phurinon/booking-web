import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import {categories} from "@/utils/categories";

function CategoryInput({ name, register, setValue }) {
  return (
    <div>
      <Label className={'capitalize font-bold mb-1'}>{name}</Label>
      <Select required>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Please select category" />
        </SelectTrigger>
        <SelectContent className={' bg-white '}>
            {
                categories.map((item, index) => {
                    // console.log(item)
                    return (
                        <SelectItem 
                            key={index} 
                            value={item.label} 
                            onClick={() => setValue(name, item.label)}
                        >
                            <div className="flex items-center gap-2">
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </div>
                        </SelectItem>
                    )
                })
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoryInput;
