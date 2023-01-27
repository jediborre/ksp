import EmpleadosTable from "../components/Empleados/EmpleadosTableComponent";

function HomePage() {
  return (
    <>
      <div className="pt-10 -mt-10">
        <h1 className="text-2xl text-white text-center">
          Empleados
        </h1> 
      </div>
      <div>
        <EmpleadosTable/>
      </div>
    </>
  );
}

export default HomePage;