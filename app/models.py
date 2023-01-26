from .database import Base
from sqlalchemy import Column, Integer, String, Date, Float


class Empleados(Base):
    __tablename__ = 'empleados'
    id = Column(Integer, primary_key=True, index=True)
    foto = Column(String(50))
    nombre = Column(String(100))
    trabajo = Column(String(50))
    salario = Column(Float)
    status = Column(String(20))
    fecha_contratacion = Column(Date)


class Beneficiario(Base):
    __tablename__ = 'beneficiario'
    id = Column(Integer, primary_key=True, index=True)
    id_empleado = Column(Integer)
    nombre = Column(String(100))
    parentesco = Column(String(20))
    cumpleanos = Column(String(10))
    sexo = Column(String(2))
