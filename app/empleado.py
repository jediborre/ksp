from . import schema, models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter  # ,  HTTPException, Response
from .database import get_db

router = APIRouter()


@router.get('/')
def get_empleados(
    db: Session = Depends(get_db),
    limit: int = 10,
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
