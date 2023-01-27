import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Empleado {
  id: number
  nombre: string,
  trabajo: string,
  salario: number,
  status: string,
  foto: string,
  fecha_contratacion: string,
}
type Empleados = Empleado[];
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

export const api = createApi({
  reducerPath: 'Empleados',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Empleados', 'Beneficiarios'],
  endpoints: (builder) => ({
    getEmpleados: builder.query<Empleados, void>({
      query: () => `api/empleado/?limit=500&page=1`,
      providesTags: ['Empleados'],
    }),
    getBeneficiarios: builder.query<Beneficiarios, string>({
      query: (id_empleado) => `api/beneficiario/${id_empleado}`,
      providesTags: ['Beneficiarios'],
    }),
  }),
})

export const {
  useGetEmpleadosQuery,
  useGetBeneficiariosQuery
} = api