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
                <span className="text-green-500">$</span>
                {props.salario.toLocaleString('en')}
            </td>
            <td className="px-6 py-4">
                {
                    (props.status === "Activo") ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {props.status}
                        </span>
                    ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {props.status}
                        </span>
                    )
                }
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
}
export default EmpleadoRow;