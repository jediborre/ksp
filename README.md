# KSP
Prueba enconmendada por KSP

Para correr backend
```console
uvicorn app.main:app --host localhost --port 8000 --reload
```

Para instalacion driver MysqlDb en Windows 10 Python 3.8
```console
pip install mysqlclient-1.4.6-cp38-cp38-win32.whl
```

Back-end AWS EC2
http://3.141.166.71:8080/
ec2-3-141-166-71.us-east-2.compute.amazonaws.com

RDS MySQL AWS
ksp.c8nkbwvzvgzd.us-east-2.rds.amazonaws.com

------------

**OBJETIVO** 
El aspirante deberá de demostrar sus conocimientos creando una aplicación Web donde se evaluará los conocimientos técnicos y la forma en que los aplica en la misma. 

**REQUERIMIENTO** 
Crear un módulo de administración de Empleados de una empresa, que contenga su información general, más el detalle de la información de su beneficiario. 

Campos de información: 
**Información del Empleado **
- Identificador (ID) 
- Foto 
- Nombre completo 
- Puesto de trabajo 
- Salario 
- Estatus 
- Fecha de contratación 

**Información del Beneficiario **
- Identificador (ID) 
- Nombre Completo 
- Parentesco 
- Fecha de nacimiento 
- Sexo 

Se tendrá un listado de empleados y en su detalle se podrá modificar su información (edición), aparte de las opciones de alta de empleado (nuevo) o dar de baja (eliminado lógico). 

***Opcional, se evaluará como un Plus:** Agregar funcionalidad para exportar la tabla a Excel. 

**CONSIDERACIONES TECNOLOGICAS DE LA SOLUCION **
Para desarrollar la aplicación se desglosan algunas de las consideraciones que puedes tomar como 
base: 
 **Frontend**: 
- HTML5, CSS3, puedes apoyarte del uso de Bootstrap, Preprocesadores CSS como 
SASS y/o LESS, Foundation, etc… 
- Puedes utilizar algún framework o librería JavaScript como JQuery, Angular, 
ReactJS, VueJS, etc... 
**Backend:** 
- Web API 
▪ Se evaluará como un Plus que sea con ~~**.NET Core**~~ 
- Utilizar un ORM como ~~Entity Framework ~~
- Metodologías / Buenas Prácticas / Estándares, (se tomará en cuenta el uso de): 
- Patrones de diseño 
- POO 
- Principios SOLID, DRY 
- TDD 
- Framework de inyección de dependencias: Autofaq/ Spring .Net/ 

**Utilizar como repositorio de datos alguno de los siguientes: **
- SQL Server 
- Simular los datos mediante el uso de archivos JSON, XML, o en su caso el manejo de Listas o Arreglos de objetos. 


**ENVÍO DE PROYECTO **
Comprimir en una carpeta todo el proyecto que deberá incluir 
- Script de Base de Datos 
- El proyecto con todos los archivos necesarios para su ejecución y revisión