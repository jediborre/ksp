import { useEffect, useState } from "react";


function HomePage() {

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
        <h1 className="text-white">Home</h1>
    </>
  );
}

export default HomePage;