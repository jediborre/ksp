import { useState } from "react";
import RowLoader from "../Preloaders/RowLoaderComponent";
import SearchBar from "./SearchBarComponent";
import EmpleadoRow from "./EmpleadoRowComponent";
import { useGetEmpleadosQuery, useGetEmpleadosByNombreQuery, Empleados } from "../../store/api";

const getEmpleados = (lista: Empleados) => {
    const empleados = lista.map((empleado) => {
        return (
        <EmpleadoRow
            key={empleado.id}
            id={empleado.id}
            foto={empleado.foto}
            nombre={empleado.nombre}
            trabajo={empleado.trabajo}
            salario={empleado.salario}
            status={empleado.status}
            fecha_contratacion={empleado.fecha_contratacion}
        />
        );
    });
    return empleados;
}

export default function EmpleadosTable() {
    const [searchTerm, setSearchTerm] = useState('');

    const {data: empleados, isLoading, isSuccess} = useGetEmpleadosQuery();
    const {data: personajeByNombre, isLoading: isLoadingBusqueda, isSuccess: isSuccessBusqueda} = useGetEmpleadosByNombreQuery(searchTerm);

    let rows;
    let preloadRows = 12;
    
    console.log('isLoading', isLoading, '\nisLoadingBusqueda', isLoadingBusqueda);
    if (isLoading || isLoadingBusqueda) {
        rows = 
        <>{
            [...Array(preloadRows)].map((e, n) => {
                return (
                    <RowLoader key={n}></RowLoader>
                );
            })
        }</>
    }
    else if (isSuccess || isSuccessBusqueda) {
        let lista = searchTerm !== '' ? empleados : personajeByNombre;
        if (lista) {
            rows =
                <>{
                    (parseInt(lista.result) === 0) ? (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                No hay empleados
                            </th>
                        </tr>
                    ) :
                    getEmpleados(lista.empleados)
                }</>
        }
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
    <div className="shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-2">
            <div></div>
            <div className="mr-10">
                <SearchBar onSearchTerm={(nombre) => { console.log('Buscando... \'' + nombre + '\''); setSearchTerm(nombre); }}></SearchBar>
            </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="sticky text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Trabajo
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Salario
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
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