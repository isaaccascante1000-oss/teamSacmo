[readme.txt](https://github.com/user-attachments/files/30722183/readme.txt)
================================================================================
           GUÍA COMPLETA Y DOCUMENTACIÓN DEL PROYECTO DE SOFTWARE
                             REPOSITORIO: teamSacmo
================================================================================

PROYECTO: Casa del Yigüirro - Joyería Fina (San José, Costa Rica)
REPOSITORIO GITHUB: https://github.com/isaaccascante1000-oss/teamSacmo.git
ORGANIZACIÓN DEL EQUIPO: 3 Integrantes
ESTRATEGIA DE GIT: Git Flow Adaptado (main, develop, feature branches)

================================================================================
1. ARQUITECTURA Y ESTRUCTURA DE RAMAS
================================================================================

El repositorio está estructurado bajo el modelo Git Flow para permitir el 
desarrollo colaborativo en paralelo sin interrupciones ni sobreescrituras 
accidentales de código.

   [ main ]  <------------------ Versión Estable / Producción final
      ^
      | (Merge Final al concluir el proyecto)
      |
   [ develop ] <---------------- Rama de Integración (Pruebas del equipo)
      ^
      |-- [ feature/tu-modulo ] -------> Desarrollador 1 (Andrés - Interfaz/Home)
      |-- [ feature/modulo-integrante2 ] -> Desarrollador 2 (Ej. Catálogo)
      `-- [ feature/modulo-integrante3 ] -> Desarrollador 3 (Ej. Contacto/Lógica)

DEFINICIÓN DE RAMAS:
---------------------
1. main:
   - Contiene únicamente el código estable, verificado y listo para entrega.
   - Nadie trabaja directamente sobre esta rama.

2. develop:
   - Sirve como mesa de ensamblaje e integración continua para el equipo de 3.
   - Todos los Pull Requests de funcionalidades individuales deben dirigirse aquí.

3. feature/* (Ramas de funcionalidad / desarrollador):
   - Entornos de trabajo aislados para cada integrante.
   - Permiten modificar HTML, CSS y JS sin alterar el trabajo de los demás.

================================================================================
2. FLUJO DE TRABAJO DIARIO (PASO A PASO)
================================================================================

FASE A: INICIO DE JORNADA / SINCRONIZACIÓN
------------------------------------------
Antes de comenzar a programar código nuevo cada día, actualiza tu espacio local
con los cambios que tus compañeros hayan subido a la rama de integración.

   git checkout develop
   git pull origin develop
   git checkout feature/tu-modulo
   git merge develop


FASE B: GUARDAR Y SUBIR AVANCES A GITHUB
----------------------------------------
Cuando realices cambios o avances en tu módulo (HTML, CSS, JS), ejecuta los 
siguientes comandos en la terminal de Visual Studio Code:

   # 1. Preparar archivos modificados
   git add .

   # 2. Registrar el commit con un mensaje descriptivo
   git commit -m "feat: agrega tarjeta del catalogo de joyas y estilos responsive"

   # 3. Subir tu rama a GitHub
   git push -u origin feature/tu-modulo


FASE C: INTEGRAR CÓDIGO MEDIANTE PULL REQUEST (PR)
--------------------------------------------------
Cuando una funcionalidad esté lista para unirse al proyecto general:
1. Ve a la página del repositorio en GitHub:
   https://github.com/isaaccascante1000-oss/teamSacmo
2. Haz clic en el botón "Compare & pull request".
3. Configura el merge de origen a destino:
   - Base: develop  <---  Compare: feature/tu-modulo
4. Haz clic en "Create Pull Request".
5. Un compañero o líder revisa los cambios y aprueba dando clic en "Merge pull request".

================================================================================
3. GUÍA DE CONFIGURACIÓN RÁPIDA PARA INTEGRANTES DEL EQUIPO
================================================================================

Para los compañeros que se incorporan al proyecto desde cero:

1. Aceptar la invitación de colaborador enviada a su correo / cuenta de GitHub.
2. Abrir la terminal de Visual Studio Code e ingresar los comandos:

   # Clonar el proyecto
   git clone https://github.com/isaaccascante1000-oss/teamSacmo.git
   cd teamSacmo

   # Cambiarse a la rama de integración
   git checkout develop

   # Crear y posicionarse en su rama individual
   git checkout -b feature/nombre-del-integrante

================================================================================
4. RESOLUCIÓN DE PROBLEMAS Y ERRORES COMUNES
================================================================================

[ERROR: 403 Permission Denied]
------------------------------
Causa: Windows/Git está usando las credenciales guardadas de otra cuenta.
Solución:
1. Buscar "Administrador de credenciales" (Credential Manager) en Windows.
2. Ir a "Credenciales de Windows".
3. Buscar 'git:https://github.com' y seleccionar "Eliminar".
4. Ejecutar nuevamente `git push origin <rama>` para autenticarse con la cuenta correcta.

[CONFLICTOS DE MERGE]
---------------------
Causa: Dos integrantes editaron la misma línea del mismo archivo.
Solución:
1. VS Code resaltará las líneas en conflicto en color verde y azul.
2. Seleccionar sobre el editor cuál versión conservar ("Accept Current Change" o "Accept Incoming Change").
3. Guardar el archivo (`Ctrl + S`), ejecutar `git add .`, `git commit -m "fix: resuelve conflicto de merge"` y hacer `git push`.

================================================================================
5. ESTRUCTURA DE ARCHIVOS DEL PROYECTO
================================================================================

teamSacmo/
├── index.html     -> Estructura principal y maquetación de la joyería
├── style.css      -> Hojas de estilo y diseño responsive
├── java.js        -> Lógica interactiva, navegación y menú móvil
└── README.txt     -> Documentación técnica y flujo de trabajo del equipo
================================================================================
