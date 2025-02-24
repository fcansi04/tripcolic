"use client";
import Nav from "@/components/Nav";
import TourFilter from "@/components/tourFilter";
import Feed from "@/components/Feed";
import { useState, useEffect } from "react";
export default function Home() {
  const [filteredCards, setfilteredCards] = useState([]);
  const [popped, setpopped] = useState(false);
  return (
    <section className="">
      <Nav
        filteredCards={filteredCards}
        setfilteredCards={setfilteredCards}
        popped={popped}
        setpopped={setpopped}
      />
      <Feed
        filteredCards={filteredCards}
        setfilteredCards={setfilteredCards}
        popped={popped}
        setpopped={setpopped}
      />
    </section>
  );
}
