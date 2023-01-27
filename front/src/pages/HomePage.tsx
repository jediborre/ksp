import { useEffect, useState } from "react";


function HomePage() {

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="h-screen">
        <h1 className="text-white">Home</h1>
    </div>
  );
}

export default HomePage;