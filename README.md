# KSP
Prueba enconmendada para KSP por Fernando Borrego Vargas

![Proyecto KSP](ksp_sh_1.png?raw=true "Proyecto KSP")

![Documentacion API](ksp_sh_2.png?raw=true "Documentacion API")

![API](ksp_sh_3.png?raw=true "API")

Para visitar el FrontEnd
http://3.141.166.71

Para visitar el BackEnd
http://3.141.166.71:8080/

Para los docs de la API
http://3.141.166.71:8080/docs

Infraestructura
AWS EC2 free tier + AWS Aurora RDS MySQL
Front End: React   // Carpeta /front
Back End: FastAPI  // Carpeta /app


Para correr el Server
```console
ssh -i "tron.pem" ubuntu@ec2-3-141-166-71.us-east-2.compute.amazonaws.com
cd ksp
python3 -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Para modificar el archivo de configuracion nginx
```console
sudo nano /etc/nginx/sites-enabled/fastapi_nginx
sudo service nginx restart
```

Para realizar cambios al Front
```console
ssh -i "tron.pem" ubuntu@ec2-3-141-166-71.us-east-2.compute.amazonaws.com
cd ksp/front
npm build
cd dist
cp -R * /var/www/html/
```

RDS Aurora MySQL AWS
ksp.c8nkbwvzvgzd.us-east-2.rds.amazonaws.com

comando utilizado para respaldo de BD
```console
mysqldump -h ksp.c8nkbwvzvgzd.us-east-2.rds.amazonaws.com -u ksp_admin -p --ssl-mode=DISABLED --databases ksp > db.sql
```

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