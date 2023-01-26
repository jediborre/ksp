from .database import Base
from sqlalchemy import Column, Integer, String, Date, Float


class Empleados(Base):
    __tablename__ = 'empleados'
    id = Column(Integer, primary_key=True, index=True)
    foto = Column(String)
    nombre = Column(String)
    trabajo = Column(String)
    salario = Column(Float)
    status = Column(String)
    fecha_contratacion = Column(Date)


class Beneficiario(Base):
    __tablename__ = 'beneficiario'
    id = Column(Integer, primary_key=True, index=True)
    id_empleado = Column(Integer)
    nombre = Column(String)
    parentesco = Column(String)
    cumpleanos = Column(String)
    sexo = Column(String)
