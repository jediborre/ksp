from . import schema, models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter, HTTPException, Response
from .database import get_db

router = APIRouter()


@router.get('/{id_empleado}', status_code=status.HTTP_200_OK)
def get_beneficiario(
    id_empleado: int,
    db: Session = Depends(get_db)
):
    empleado_query = db.query(models.Empleados).filter(
        models.Empleados.id == id_empleado
    )
    db_empleado = empleado_query.first()
    if not db_empleado:
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


@router.post('/', status_code=status.HTTP_201_CREATED)
def create_beneficiario(
    payload: schema.BeneficiarioSchema,
    db: Session = Depends(get_db)
):

    nuevo_beneficiario = models.Beneficiario(**payload.dict())

    db.add(nuevo_beneficiario)
    db.commit()
    db.refresh(nuevo_beneficiario)

    return {
        "status": "success",
        "beneficiario": nuevo_beneficiario
    }


@router.patch("/{id}")
def update_beneficiario(
    id: int,
    payload: schema.BeneficiarioSchema,
    db: Session = Depends(get_db)
):
    beneficiario_query = db.query(models.Beneficiario).filter(
        models.Beneficiario.id == id
    )
    db_beneficiario = beneficiario_query.first()

    if not db_beneficiario:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="beneficiario no existe"
        )

    update_data = payload.dict(exclude_unset=True)
    beneficiario_query.filter(models.Beneficiario.id == id).update(
        update_data, synchronize_session=False
    )
    db.commit()
    db.refresh(db_beneficiario)

    return {
        "status": "success",
        "beneficiario": db_beneficiario
    }


@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_beneficiario(id: int, db: Session = Depends(get_db)):
    beneficiario_query = db.query(models.Beneficiario).filter(
        models.Beneficiario.id == id
    )
    beneficiario = beneficiario_query.first()
    if not beneficiario:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Empleado sin beneficiarios"
        )

    beneficiario.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)
