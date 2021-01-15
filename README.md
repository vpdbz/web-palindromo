## Demo

En la siguiente URL se puede ver el funcionamiento del sitio
https://palindromo-web-react.herokuapp.com/

## Scripts Disponibles

En la carpeta raiz se puede ejecutar lo siguiente:

### `npm start`

Se ejecuta la aplicacion en modo desarrollo.<br />
Open [http://localhost:3000](http://localhost:3000) para ver en el navegador.

La agina se recarga si se realizan cambios.<br />
Tambien se mostraran los errores de lint en la consola.


### `npm build`

Genera la app para ambiente productivo en la carpeta `build`.<br />


### `scripts\build-docker.sh`

Script para la generacion de la imagen docker.<br />
Contiene en el interior la URL del micro servicio que retorna las consultas, actualmente configurado en la misma maquina.


### `scripts\run-docker.sh`

Script para la ejecutar la imagen docker.<br />
Se levanta en la URL localhost:1337.