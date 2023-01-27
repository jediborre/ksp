from . import schema, models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter, HTTPException
from .database import get_db

router = APIRouter()


@router.get('/{id_empleado}', status_code=status.HTTP_200_OK)
def get_beneficiario(
    id_empleado: int,
    db: Session = Depends(get_db)
):
    print(f'id_empleado {id}')
    empleado = db.query(
        models.Empleados
    ).filter(
        models.Empleados.id == id_empleado
    ).first()
    if empleado is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado no existe"
        )

    beneficiarios = db.query(models.Beneficiario).filter(
        models.Beneficiario.id_empleado == id_empleado
    ).all()

    return {
        'status': 'success',
        'results': len(beneficiarios),
        'beneficiarios': beneficiarios
    }


@router.post('/{id}', status_code=status.HTTP_201_CREATED)
def create_beneficiario(
    payload: schema.BeneficiarioSchema,
    db: Session = Depends(get_db)
):
    empleado = db.query(
        models.Empleados
        ).filter(models.Empleados.id == id).first()
    if empleado is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado no existe"
        )
    beneficiario = models.Beneficiario(**payload.dict())
    db.add(beneficiario)

    db.commit()
    db.refresh(beneficiario)
    return {
        "status": "success",
        "beneficiario": beneficiario
    }


@router.put("/{id}")
def update_beneficiario(
    id: int,
    beneficiario: schema.BeneficiarioSchema,
    db: Session = Depends(get_db)
):
    db_beneficiario = db.query(
        models.Empleados
    ).filter(models.Empleados.id == id).first()
    if db_beneficiario is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado sin beneficiarios"
        )

    db_beneficiario.sexo = beneficiario.sexo
    db_beneficiario.nombre = beneficiario.nombre
    db_beneficiario.parentesco = beneficiario.parentesco
    db_beneficiario.cumpleanos = beneficiario.cumpleanos

    db.commit()

    return db_beneficiario


@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_beneficiario(
    id: int,
    db: Session = Depends(get_db)
):
    beneficiario = db.query(
        models.Beneficiario
        ).filter(models.Beneficiario.id == id).first()
    if beneficiario is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado sin beneficiarios"
        )
    db.delete(beneficiario)
    db.commit()

    return {"message": "Beneficiario eliminado"}
