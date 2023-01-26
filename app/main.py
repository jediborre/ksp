from app import models, empleado
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(empleado.router, tags=['Empleados'], prefix='/api/empleado')


@app.get('/')
async def root():
    return {"message": "Servidor arriba!"}
