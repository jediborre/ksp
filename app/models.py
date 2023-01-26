from .database import Base
from sqlalchemy import Column, Integer, String, Date, Float


class Empleados(Base):
    __tablename__ = 'empleados'
    id = Column(Integer, primary_key=True, index=True)
    foto = Column(String(50), server_default='default.png')
    nombre = Column(String(100), nullable=False, server_default='')
    trabajo = Column(String(50), nullable=False, server_default='')
    salario = Column(Float)
    status = Column(String(20), server_default='Activo')
    fecha_contratacion = Column(Date)


class Beneficiario(Base):
    __tablename__ = 'beneficiario'
    id = Column(Integer, primary_key=True, index=True)
    id_empleado = Column(Integer)
    nombre = Column(String(100), nullable=False, server_default='')
    parentesco = Column(String(20), nullable=False, server_default='')
    cumpleanos = Column(String(10), nullable=False, server_default='')
    sexo = Column(String(2), server_default='M')
