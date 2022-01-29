Librerias instaladas:
-Bootstrap
-Styled Components
-Axios
-Sweet Alert
-Formik
-React-Router-Dom v6
-Font Awesome

Alerta de error
El programa funciona bien hasta que actualizas el Home y surge el siguiente error:
"Cannot read properties of undefined (reading '0')" 

El problema se soluciona realizando lo siguiente:
-Comentar las lineas 43 y 270-274,
-Guardar el archivo,
-Descomentar las lineas mencionadas en el primer paso,
-Volver a guardar.

Creería que esto sucede debido a algun error de petición de Axios, el cual estuve tratando 
de resolver pero no hubo caso. En caso de que reconozcan el error, agradecería que lo 
compartan.
