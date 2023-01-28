import React from 'react';
import { Empleado } from '../../store/api';

interface Modal {
    onClose: (show: boolean) => void;
}

type Props = Empleado & Modal;

const EmpleadoDetalle: React.FC<Props> = (props) => {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			  	<div className="relative w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl text-center font-semibold text-blue-900">
								{props.nombre}
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => props.onClose(false)}
							>
								<span className="bg-transparent text-black opacity-7 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<div className="relative p-6 flex-auto">
							<div className="mx-auto">
								<div className="my-4 text-slate-500 text-lg leading-relaxed">
									<div>
										Trabajo: <span className='text-blue-900 font-bold'>{props.trabajo}</span>
									</div>
									<div>
										Salario: <span className='text-green-800 font-bold'>$</span><span>{props.salario}</span>
									</div>
									<div>
										Status: <span className='text-blue-900 font-bold'>{props.status}</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								type="button"
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								onClick={() => props.onClose(false)}
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => props.onClose(false)}> 
			</div>
		</>
	);
};

export default EmpleadoDetalle;