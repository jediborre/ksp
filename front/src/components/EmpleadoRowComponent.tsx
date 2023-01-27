interface Empleado {
    id: number;
    foto: string;
    nombre: string;
    trabajo: string;
    salario: number;
    status: string;
    fecha_contratacion: string
};
const EmpleadoRow: React.FC<Empleado> = (props) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.nombre}
            </th>
            <td className="px-6 py-4">
                {props.trabajo}
            </td>
            <td className="px-6 py-4">
                {props.status}
            </td>
            <td className="px-6 py-4">
                {props.salario}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
}
export default EmpleadoRow;