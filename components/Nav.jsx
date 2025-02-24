"use client";
import { useState } from "react";
import TourFilter from "./tourFilter";
const Nav = ({ filteredCards, setfilteredCards, popped, setpopped }) => {
  const [category, setcategory] = useState("");

  return (
    <nav className="flex h-full   z-[1000]  justify-between mt-4 px-10 max-md:px-4 ">
      <div className="flex gap-2 ">
        <span
          className="material-symbols-outlined cursor-pointer  "
          onClick={() => setpopped((prev) => !prev)}
        >
          menu
        </span>
        <h2>Traveller's local market</h2>
      </div>

      <div className="flex gap-5 max-sm:gap-2">
        <span className="material-symbols-outlined cursor-pointer">
          language
        </span>
        <span className="material-symbols-outlined  cursor-pointer">
          favorite
        </span>
        <span className="material-symbols-outlined cursor-pointer">
          shopping_cart
        </span>
        <span className="material-symbols-outlined cursor-pointer">
          account_circle
        </span>
      </div>
      <div
        className={`mt-4  p-4 absolute z-[1000] bg-white top-10 border-2 rounded-3xl md:h-[58rem] max-md:[58rem]  flex flex-col   w-[93%]  ${
          popped ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between  ">
          <select
            className="bgprimary500 py-2 flex text-center text-white font-bold h-[40px] border-none rounded-md mb-5 "
            name=""
            id=""
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="TOURS" className="">
              TOUR
            </option>
            <option value="Tickets" className="bgprimary400">
              Tickets
            </option>
            <option value="Rents" className="bgprimary400">
              Rents
            </option>
            <option value="Transfer" className="bgprimary400">
              Transfer
            </option>
          </select>
          <h1 className="font-bold text-xl mr-5 underline">Filter</h1>
          <span
            onClick={() => setpopped(false)}
            className="material-symbols-outlined transform scale-150 h-5 cursor-pointer"
          >
            cancel
          </span>
        </div>
        <TourFilter
          popped={popped}
          filteredCards={filteredCards}
          setfilteredCards={setfilteredCards}
          setpopped={setpopped}
          category={category}
          setcategory={setcategory}
        />
      </div>
    </nav>
  );
};

export default Nav;
