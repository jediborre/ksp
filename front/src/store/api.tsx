import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface EmpleadoQuery {
  status: number
  results: string,
  empleados: Empleado[],
}
export interface Empleado {
  id: number
  foto: string,
  status: string,
  nombre: string,
  salario: number,
  trabajo: string,
  fecha_contratacion: string,
}
export type Empleados = Empleado[];

export interface beneficiario {
  id: number
  id_empleado: number
  nombre: string
  parentesco: string
  cumpleanos: string
  sexo: string
}
type Beneficiarios = beneficiario[];

const baseUrl = 'http://3.141.166.71:8080/';

export const apiSlice = createApi({
  reducerPath: 'Empleados',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Empleados', 'Beneficiarios'],
  endpoints: (builder) => ({
    getEmpleados: builder.query<EmpleadoQuery, void>({
      query: () => `api/empleado/?limit=500&page=1`,
      providesTags: ['Empleados'],
    }),
    getEmpleadoById: builder.query<Empleado, number>({
      query: (id) => `api/empleado/${id}`,
    }),
    getEmpleadosByNombre: builder.query<EmpleadoQuery, string>({
      query: (nombre) => `api/empleado/?limit=500&page=1&search=${encodeURIComponent(nombre)}`,
    }),
    getBeneficiarios: builder.query<Beneficiarios, string>({
      query: (id_empleado) => `api/beneficiario/${id_empleado}`,
      providesTags: ['Beneficiarios'],
    }),
  }),
})

export const {
  useGetEmpleadosQuery,
  useGetEmpleadoByIdQuery,
  useGetEmpleadosByNombreQuery,
  useGetBeneficiariosQuery
} = apiSlice