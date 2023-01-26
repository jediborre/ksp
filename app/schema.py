from sqlalchemy import Date
from datetime import datetime
from pydantic import BaseModel


class Empleado(BaseModel):
    id: int
    foto: str
    nombre: str
    job: str
    salario: float
    status: str
    fecha_contratacion: datetime


class Beneficiario(BaseModel):
    id: int
    id_empleado: int
    nombre: str
    parentesco: str
    cumpleanos: Date
    sexo: str
