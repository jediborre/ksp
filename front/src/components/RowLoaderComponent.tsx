import CellLoader from "./CellLoaderComponent";

export default function RowLoader() {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <CellLoader width="250"/>
            </th>
            <td className="px-6 py-4">
                <CellLoader width="100"/>
            </td>
            <td className="px-6 py-4">
                <CellLoader width="100"/>
            </td>
            <td className="px-6 py-4">
                <CellLoader width="100"/>
            </td>
            <td className="px-6 py-4 text-right">
            </td>
        </tr>
    )
}