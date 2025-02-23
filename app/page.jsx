"use client";
import Nav from "@/components/Nav";
import TourFilter from "@/components/tourFilter";
import Feed from "@/components/Feed";
import { useState, useEffect } from "react";
export default function Home() {
  const [filteredCards, setfilteredCards] = useState([]);

  return (
    <section className="">
      <Nav filteredCards={filteredCards} setfilteredCards={setfilteredCards} />
      <Feed filteredCards={filteredCards} setfilteredCards={setfilteredCards} />
    </section>
  );
}
