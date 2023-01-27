from app import models, empleado, beneficiario
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="KSP API",
    description="API para el proyecto KSP",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    empleado.router,
    tags=['Empleados'],
    prefix='/api/empleado'
)
app.include_router(
    beneficiario.router,
    tags=['Beneficiario'],
    prefix='/api/beneficiario'
)


@app.get('/')
async def root():
    return {"message": "Servidor arriba!"}
