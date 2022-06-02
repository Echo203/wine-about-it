import React from "react";
import Hero from "../Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        style={{
          width: "100%",
          height: "20vw",
          backgroundColor: "#fedcd9",
          borderTop: "1px solid black",
          zIndex: 3,
        }}
      ></div>
    </>
  );
}
