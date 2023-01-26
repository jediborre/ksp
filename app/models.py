from .database import Base
from sqlalchemy import Column, Integer, String, Date, Float


class Empleados(Base):
    __tablename__ = 'empleados'
    id = Column(Integer, primary_key=True, index=True)
    photo = Column(String)
    name = Column(String)
    job = Column(String)
    salary = Column(Float)
    status = Column(String)
    hire_date = Column(Date)


class Beneficiario(Base):
    __tablename__ = 'beneficiario'
    id = Column(Integer, primary_key=True, index=True)
    id_empleado = Column(Integer)
    nombre = Column(String)
    parentesco = Column(String)
    cumpleanos = Column(Date)
    sexo = Column(String)
