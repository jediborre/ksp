from . import schema, models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter, HTTPException  # , Response
from .database import get_db

router = APIRouter()


@router.get('/')
def get_empleados(
    db: Session = Depends(get_db),
    limit: int = 50,
    page: int = 1,
    search: str = ''
):
    skip = (page - 1) * limit

    empleados = db.query(models.Empleados).filter(
            models.Empleados.nombre.contains(search)
        ).limit(limit).offset(skip).all()

    return {
        'status': 'success',
        'results': len(empleados),
        'empleados': empleados
    }


@router.post('/', status_code=status.HTTP_201_CREATED)
def create_empleado(
    payload: schema.EmpleadoSchema,
    db: Session = Depends(get_db)
):
    empleado = models.Empleados(**payload.dict())
    db.add(empleado)
    db.commit()
    db.refresh(empleado)
    return {
        "status": "success",
        "empleado": empleado
    }


@router.put("/{id}")
def update_empleado(
    id: int,
    empleado: schema.EmpleadoSchema,
    db: Session = Depends(get_db)
):
    db_empleado = db.query(
        models.Empleados
    ).filter(models.Empleados.id == id).first()
    if db_empleado is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detalle="Empleado no encontrado"
        )
    # db_empleado.foto = empleado.foto
    db_empleado.nombre = empleado.nombre
    db_empleado.trabajo = empleado.trabajo
    db_empleado.salario = empleado.salario
    db_empleado.status = empleado.status
    db_empleado.fecha_contratacion = empleado.fecha_contratacion
    db.commit()
    return db_empleado


@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_empleado(id: int, db: Session = Depends(get_db)):
    empleado = db.query(
        models.Empleados
        ).filter(models.Empleados.id == id).first()
    if empleado is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detalle="Empleado no encontrado"
        )
    db.delete(empleado)
    db.commit()

    return {"message": "Empleado eliminado"}
