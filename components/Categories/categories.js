import React from "react";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { categoryData } from "@/mock/categoryData";
import "./categories.css";
const Categories = () => {
  return (
    <section className="w-[100%] pt-[40px] bg-gray-200 h-[40vh] xlg:h-[30vh]">
      <div className="w-[75%] mx-auto">
        <div className="flex justify-between">
          <div>
            <p>Browse By Category</p>
          </div>
          <div className="icons flex gap-[10px]">
            <span>
              <PiLessThan className="text-xl" />
            </span>
            <span>
              <PiGreaterThan className="text-xl" />
            </span>
          </div>
        </div>
        <div className="categories pt-3 gap-2">
          {categoryData.map((item, index) => (
            <div
              className="w-[100px] h-[70px] bg-gray-300 rounded-[9px] pt-2 cursor-pointer"
              key={index}
            >
              <div className="flex justify-center pt-1">{item.icon}</div>
              <div className="flex justify-center">
                <p className="text-[14px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
