from . import schema, models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter, HTTPException, Response
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
    nuevo_empleado = models.Empleados(**payload.dict())

    db.add(nuevo_empleado)
    db.commit()
    db.refresh(nuevo_empleado)

    return {
        "status": "success",
        "empleado": nuevo_empleado
    }


@router.patch("/{id}")
def update_empleado(
    id: int,
    payload: schema.EmpleadoSchema,
    db: Session = Depends(get_db)
):
    empleado_query = db.query(models.Empleados).filter(
        models.Empleados.id == id
    )
    db_empleado = empleado_query.first()
    if not db_empleado:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado no encontrado"
        )

    update_data = payload.dict(exclude_unset=True)
    empleado_query.filter(models.Empleados.id == id).update(
        update_data, synchronize_session=False
    )
    db.commit()
    db.refresh(db_empleado)

    return {
        "status": "success",
        "empleado": db_empleado
    }


@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_empleado(id: int, db: Session = Depends(get_db)):
    empleado_query = db.query(models.Empleados).filter(
        models.Empleados.id == id
    )
    db_empleado = empleado_query.first()
    if not db_empleado:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado no encontrado"
        )

    db_empleado.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)
