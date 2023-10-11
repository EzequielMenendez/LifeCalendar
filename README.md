# Life Calendar
Life Calendar es una aplicación que fue construida con TypeScript, React, Node, Express y MongoDB. Se trata de un calendario de eventos/tareas con CRUD completo, también cuenta con un sistema de usuarios con JWT, así que cada usuario tiene sus propios eventos. Los eventos son notificados por correo electrónico. Dejo algunas fotos de cómo se ve la app:
![Captura de pantalla (67)](https://github.com/EzequielMenendez/LifeCalendar/assets/128303374/7bbabab9-f2b4-4512-aa17-726bdfdf48f7)
![Captura de pantalla (65)](https://github.com/EzequielMenendez/LifeCalendar/assets/128303374/008266f0-f04e-4650-869c-b4b1d59b51b9)
![Captura de pantalla (66)](https://github.com/EzequielMenendez/LifeCalendar/assets/128303374/3aea5690-85ea-4eff-82da-c47d325a8ea8)
## Como Instalar este proyecto?
Primero deberan tener Node instalado en su computador.
El primer paso es hacer un fork del proyecto y abrirlo en tu editor de código.
Al tenerlo deberás crear un archivo .env dentro de la carpeta del servidor.
Deberás contar con una base de datos de MongoDB para que funcione. El .env deberá tener lo siguiente:
- PASSWORD="aca va la contraseña de la base de datos"
- DB_URL="aca va la URL de la base de datos"
- EMAIL="aca debe ir el email que va a enviar los mails"
- PASSWORD_EMAIL="aca debe ir una contraseña de aplicaciones del email"

Luego de esto deberán abrir una terminal en el servidor y ejecutar el comando npm install, y luego de esto npm run dev. Después hacemos lo mismo con el cliente, abrimos una terminal, ejecutamos npm install y npm run dev.

¡Y listo! ¡La aplicación está funcionando en el puerto 5173!
