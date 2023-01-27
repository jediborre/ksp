import RowLoader from "./RowLoaderComponent";
import EmpleadoRow from "./EmpleadoRowComponent";
import { useGetEmpleadosQuery } from "../store/api";

export default function Table() {
    const {data: empleados, isLoading, isSuccess} = useGetEmpleadosQuery();
    let rows;
    let preloadRows = 8;
    if (isLoading) {
        rows = 
        <>{
            [...Array(preloadRows)].map((e, n) => {
                return (
                    <RowLoader key={n}></RowLoader>
                );
            })
        }</>
    }
    else if (isSuccess) {
        rows =
            <>{
                (empleados.length === 0) ? (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            No hay empleados
                        </th>
                    </tr>
                ) :
                empleados.map((empleado) => {
                    <EmpleadoRow
                        id={empleado.id}
                        foto={empleado.foto}
                        nombre={empleado.nombre}
                        trabajo={empleado.trabajo}
                        salario={empleado.salario}
                        status={empleado.status}
                        fecha_contratacion={empleado.fecha_contratacion}
                    />
                })
            }</>
    }
    else {
        rows =
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th colSpan={6} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center text-2xl">
                    Error al cargar empleados
                </th>
            </tr>
    }
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-2">
            <div></div>
            <div>
                <label htmlFor="table-search" className="sr-only">Busqueda</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busqueda de Empleados" />
                </div>
            </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Trabajo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Salario
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        <div className="h-20"></div>
    </div>
    );
}