from datetime import datetime
from pydantic import BaseModel


class EmpleadoSchema(BaseModel):
    id: int
    foto: str
    nombre: str
    trabajo: str
    salario: float
    status: str
    fecha_contratacion: datetime


class BeneficiarioSchema(BaseModel):
    id: int
    id_empleado: int
    nombre: str
    parentesco: str
    cumpleanos: str
    sexo: str
