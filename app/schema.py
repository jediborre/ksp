from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class EmpleadoSchema(BaseModel):
    id: int
    foto: Optional[str] = ''
    nombre: Optional[str] = ''
    trabajo: Optional[str] = ''
    salario: Optional[float] = 0.0
    status: Optional[str] = ''
    fecha_contratacion: datetime


class BeneficiarioSchema(BaseModel):
    id: int
    id_empleado: int
    nombre: Optional[str] = ''
    parentesco: Optional[str] = ''
    cumpleanos: Optional[str] = ''
    sexo: Optional[str] = 'M'
