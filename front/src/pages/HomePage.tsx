import { useEffect, useState } from "react";
import Table from "../components/Empleados/TableComponent";


function HomePage() {
  return (
    <>
      <div className="pt-10 -mt-10">
        <h1 className="text-2xl text-white text-center">
          Empleados
        </h1> 
      </div>
      <div>
        <Table/>
      </div>
    </>
  );
}

export default HomePage;