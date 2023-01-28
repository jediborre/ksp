import { useState } from "react";
import RowLoader from "../Preloaders/RowLoaderComponent";
import SearchBar from "./SearchBarComponent";
import EmpleadoRow from "./EmpleadoRowComponent";
import EmpleadoDetalle from "./EmpleadoDetalleComponent";
import { useGetEmpleadosQuery, useGetEmpleadosByNombreQuery, useGetEmpleadoByIdQuery, Empleados } from "../../store/api";

export default function EmpleadosTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [idEmpleado, setIdEmpleado] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const {data: empleados, isLoading, isSuccess} = useGetEmpleadosQuery();
    const {data: empleadoById} = useGetEmpleadoByIdQuery(idEmpleado, { refetchOnMountOrArgChange: true });
    const {data: empleadoByNombre} = useGetEmpleadosByNombreQuery(searchTerm, { refetchOnMountOrArgChange: true });

    let rows, modal;
    let preloadRows = 12;

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
                click={(pId) => {
                    console.log(`Empleado #${pId}`);
                    setIdEmpleado(pId);
                    setShowModal(true); 
                }}
            />
            );
        });
        return empleados;
    }
    
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
        let lista = searchTerm !== '' ? empleadoByNombre : empleados;
        let texto_no_hay = searchTerm !== '' ? `No hay empleados para busqueda '${searchTerm}'` : 'No hay empleados';
        if (lista)
            rows =
                <>
                {
                    (parseInt(lista.results) === 0) ? (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th colSpan={6} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                {texto_no_hay}
                            </th>
                        </tr>
                    ) :
                    getEmpleados(lista.empleados)
                }
                </>
    }
    else {
        rows =
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th colSpan={6} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center text-2xl">
                    Error al cargar empleados
                </th>
            </tr>
    }
    if (empleadoById)
        modal =
            <EmpleadoDetalle
                id={idEmpleado}
                nombre={empleadoById.nombre}
                trabajo={empleadoById.trabajo}
                salario={empleadoById.salario}
                status={empleadoById.status}
                foto={empleadoById.foto}
                fecha_contratacion={empleadoById.fecha_contratacion}
                onClose={() => setShowModal(true)}
            />

    return (
    <div className="shadow-md sm:rounded-lg">
        {idEmpleado && (
            <div className={showModal ? "block" : "hidden"}>
                {modal}
            </div>
        )}
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