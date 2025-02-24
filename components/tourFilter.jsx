"use client";

import { useState, useEffect } from "react";
import { tours } from "@/data/Cards";

const TourFilter = ({
  popped,
  filteredCards,
  setfilteredCards,
  setpopped,
  category,
  setcategory,
}) => {
  const themes = ["Island Tour", "Land Tour", "Safari"];
  const activities = ["Swimming", "Elephant Care", "Snorkeling", "running"];
  const vehicles = [
    "Yacht",
    "Speedboat",
    "Safari",
    "catamaran",
    "speedcatamaran",
  ];
  const features = ["Transfer", "halal food", "vegetarian food"];

  const [location, setLocation] = useState("");
  const [selectedThemes, setTheme] = useState([]);
  const [selectedActivitys, setActivity] = useState([]);
  const [selectedPrice, setPrice] = useState(12500);
  const [selectedStartTime, setStartTime] = useState(17.0);
  const [selectedGroupSize, setGroupSize] = useState(20);
  const [selectedVehicles, setVehicle] = useState([]);
  const [selectedFeatures, setFeatures] = useState([]);

  const filteredTours = tours.filter((tour) => {
    // Her koşulu ayrı ayrı kontrol edelim
    const locationCondition =
      location === "" || tour.location.includes(location);
    const categoryConditon =
      category === "" || tour.category.includes(category);
    const themeCondition =
      selectedThemes.length === 0 || selectedThemes.includes(tour.theme);
    const activityCondition =
      selectedActivitys.length === 0 ||
      selectedActivitys.includes(tour.activity);
    const priceCondition = tour.price <= selectedPrice;
    const vehicleCondition =
      selectedVehicles.length === 0 || selectedVehicles.includes(tour.vehicle);
    const featureCondition =
      selectedFeatures.length === 0 || selectedFeatures.includes(tour.features);

    // Her koşulun sonucunu console'a yazdıralım
    console.log(`Tour ${tour.id} conditions:`, {
      location: locationCondition,
      theme: themeCondition,
      activity: activityCondition,
      price: priceCondition,
      vehicle: vehicleCondition,
      feature: featureCondition,
    });

    return (
      locationCondition &&
      themeCondition &&
      activityCondition &&
      priceCondition &&
      vehicleCondition &&
      featureCondition
    );
  });

  const handleButtonClick = (category, value) => {
    switch (category) {
      case "theme":
        setTheme((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "activity":
        setActivity((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "vehicle":
        setVehicle((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "feature":
        setFeatures((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      default:
        break;
    }
  };
  const handleReset = () => {
    setLocation("");
    setTheme([]);
    setActivity("");
    setPrice(12500);
    setStartTime(17.0);
    setGroupSize(20);
    setVehicle([]);
    setFeatures([]);
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Where you wanna visit(italy,spain)"
            className="outline-none  h-4 border-2 py-4 px-4 w-[20rem]   rounded-lg"
          />
          <span
            onClick={(e) => {
              e.preventDefault();
              setpopped(false);
              setfilteredCards(filteredTours);
            }}
            className="material-symbols-outlined absolute top-20 left-[19rem]  textprimary600 cursor-pointer"
          >
            search
          </span>
        </div>
        <div>
          <h1 className="text-xl mb-2">Theme</h1>
          <div className="flex gap-20 flex-wrap max-md:gap-10">
            {themes.map((theme) => {
              return (
                <button
                  key={theme}
                  className={`w-30 h-[30px]  p-1 px-4 rounded-md  outline-none ${
                    selectedThemes.includes(theme)
                      ? "bg-orange-400"
                      : "bg-white shadow-sm outline-1 outline-gray-300 "
                  } `}
                  onClick={() => handleButtonClick("theme", theme)}
                >
                  {theme}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-xl">Activity</h1>
          <div className="flex flex-wrap gap-20 max-md:gap-10 mb-5 mt-2">
            {activities.map((activity) => {
              return (
                <button
                  key={activity}
                  className={`w-30 h-[30px] p-1 px-4 rounded-md outline-none ${
                    selectedActivitys.includes(activity)
                      ? "bg-orange-400"
                      : "bg-white shadow-sm outline-1 outline-gray-300  "
                  } `}
                  onClick={() => handleButtonClick("activity", activity)}
                >
                  {activity}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-5 mb-5">
          <input
            type="range"
            min="0"
            max="20000"
            value={selectedPrice}
            onChange={(e) => setPrice(e.target.value)}
            className="
                w-[18rem] h-[2px] rounded-lg appearance-none cursor-pointer bg-gray-400 mr-2
                accent-orange-400
                [&::-webkit-slider-thumb]:w-5 
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:bgprimary600 
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer
              "
          />
          <span className="p-2 w-4 border-2 rounded-md">{selectedPrice}</span>
        </div>
        <div className="mt-5 mb-5">
          <input
            type="range"
            min="0.00"
            max="24.59"
            value={selectedStartTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="
             w-[18rem] h-[2px] rounded-lg appearance-none cursor-pointer bg-gray-400  mr-2
            accent-orange-400
            [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 
            [&::-webkit-slider-thumb]:bgprimary600 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
          "
          />
          <span className="p-2  w-4 border-2 rounded-md">
            {selectedStartTime}
          </span>
        </div>
        <div className="mt-5 mb-5">
          <input
            type="range"
            min="0"
            max="40"
            value={selectedGroupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="
            w-[18rem] h-[2px]  rounded-lg appearance-none cursor-pointer bg-gray-400 mr-2
            accent-orange-400
            [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 
            [&::-webkit-slider-thumb]:bgprimary600 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
          "
          />
          <span className="p-2 w-10 border-2 rounded-md">
            {selectedGroupSize}
          </span>
        </div>
        <div>
          <h1 className="text-xl mb-2">Vehicles</h1>
          <div className="flex flex-wrap gap-20 max-lg:gap-4  ">
            {vehicles.map((vehicle) => {
              return (
                <button
                  key={vehicle}
                  className={`w-30 h-[30px] p-1 px-4 rounded-md outline-none ${
                    selectedVehicles.includes(vehicle)
                      ? "bg-orange-400"
                      : "bg-white shadow-sm outline-1 outline-gray-300  "
                  } `}
                  onClick={() => handleButtonClick("vehicle", vehicle)}
                >
                  {vehicle}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-2">Features</h1>
          <div className="flex flex-wrap gap-20 max-lg:gap-4  ">
            {features.map((feature) => {
              return (
                <button
                  key={feature}
                  className={`w-30 h-[30px] p-1 px-4 rounded-md outline-none ${
                    selectedFeatures.includes(feature)
                      ? "bg-orange-400"
                      : "bg-white shadow-sm outline-1 outline-gray-300  "
                  } `}
                  onClick={() => handleButtonClick("feature", feature)}
                >
                  {feature}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-end gap-5">
          <button onClick={handleReset} className="bgprimary500 p-3 rounded-lg">
            Reset
          </button>{" "}
          <button
            onClick={() => {
              setfilteredCards(filteredTours);
              setpopped(false);
            }}
            className="bgprimary500 p-3 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourFilter;
