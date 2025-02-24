import React from "react";
import { tours } from "@/data/Cards";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/m1.jpg";
const Feed = ({ filteredCards, setfilteredCards }) => {
  console.log(filteredCards, "filteredcard");
  const cardsToShow = filteredCards?.length ? filteredCards : tours;
  return (
    <div className="mt-20 ml-20 z-0 relative ">
      <div className="flex gap-10 flex-wrap rounded-lg ">
        {cardsToShow.map((card) => {
          return (
            <div
              key={card.id}
              className="w-[25rem] rounded-lg relative flex-col flex gap-2 shadow-md p-4 bg-white "
            >
              <Image alt="place image" src={img}></Image>
              <div className="absolute bgprimary500 text-white font-bold py-1 px-2 rounded-md top-44 left-6">
                {card.category}
              </div>
              <span className="material-symbols-outlined absolute top-6 right-6 textprimary500 bg-white rounded-md p-1 cursor-pointer">
                favorite
              </span>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span className="material-symbols-outlined textprimary500">
                    star
                  </span>
                  <span>4.3</span>
                </div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined textprimary500">
                    location_on
                  </span>
                  <span className="">{card.location}</span>
                </div>
              </div>

              <p className="font-bold text-xl">{card.description}</p>
              <h2 className="text-end font-bold text-xl">{card.price}$</h2>
              <div className="flex justify-between items-center">
                <Link href="/" className="textprimary500">
                  details
                </Link>
                <button className="py-2 px-2 bgprimary500 text-white font-bold rounded-md">
                  Book now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
