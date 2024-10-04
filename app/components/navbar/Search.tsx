"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Search = () => {
  const [show, setShow] = useState(false);
  const [value1, onChange1] = useState<Value>(new Date());
  const [value2, onChange2] = useState<Value>(new Date());

  return (
    <div className="border -[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer relative">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-4">Anywhere</div>
        <div
          onClick={() => {
            setShow(true);
          }}
          className="hidden sm:block text-sm font-semibold p-4 border-x-[1px] flex-1 text-center"
        >
          any week
        </div>
        <div className="flex-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block ">Add Guest</div>
          <div className="p-2 bg-rose-500 rounded-full text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
      <div
        className={`shadow-lg bg-white rounded-3xl absolute -left-44 top-20 p-5  ${show ? "block" : "hidden"}`}
      >
        <div className="flex items-start space-x-5">
          <div>
            <Calendar className="border-none" onChange={onChange1} value={value1} />
          </div>
          <div>
            <Calendar className="border-none" onChange={onChange2} value={value2} />
          </div>
        </div>
        <div className=" w-fit pt-5 float-end space-x-2">
        <button
        className="bg-red-500 py-2 px-5 rounded-2xl"
          onClick={() => {
            setShow(false);
          }}
        >
          close
        </button>
        <button
         className="bg-red-500 py-2 px-5  rounded-2xl"
          onClick={() => {
            setShow(false);
          }}
        >
          submit
        </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
