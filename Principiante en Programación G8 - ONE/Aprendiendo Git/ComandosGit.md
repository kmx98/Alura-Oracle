<h1>Comandos de Git</h1>

- Ver el usuario conectado actualmente: 
    - ````git config --global user.name ```` .
    - ```` git config --global user.email ````.
- Cambiar el usuario configurado:
    - ```` git config --global user.name "Nuevo Usuario" ````
    - ```` git config --global user.email nuevoemail@example.com ````
- Mirar el historial de comandos en consola: ```` history ````
- Clonar un proyecto: ```` git clone (URL que ocupes https, ssh, etc)````.
![Texto alternativo](/Principiante%20en%20Programación%20G8%20-%20ONE/img/git.PNG)
- ```` git log ````: Muestra información detallada sobre cada commit, como el hash, el autor, la fecha y el mensaje asociado al commit (con la tecla Q puedes salir del comando) tiene variantes como usar este mismo comando con ```` --oneline ````.
- El comando ```` git status ```` en Git se utiliza para mostrar el estado del repositorio de trabajo y del área de preparación (staging area). Es útil para ver qué cambios has realizado, qué archivos están listos para ser confirmados (committed), y cuáles no lo están.
    - **Archivos sin seguimiento (Untracked files):** Archivos que has creado pero que aún no están bajo el control de versiones de Git.
    - **Cambios no preparados (Changes not staged for commit):**  Archivos modificados pero que no has añadido al área de preparación con ```` git add ````.
    - **Cambios preparados para confirmación (Changes to be committed):** Archivos que has añadido al área de preparación y están listos para ser confirmados.
- El comando ```` git add ```` en Git se utiliza para añadir cambios al área de preparación (staging area). Esto significa que marcas los archivos o cambios que quieres incluir en tu próximo commit. Sin este paso, los cambios no se guardarán en el historial de versiones al ejecutar ```` git commit ````. Dicho de otra forma, es lo mismo que hace **VS code** internamente en source control, ya que este utiliza ```` git add ```` para agregar todos los archivos creados, eliminados y modificados  en el área de preparación (staging area).
    
    **Sintaxis básica:**
    - Preparar un archivo específico: ```` git add archivo.txt ````
    - Preparar múltiples archivos: ```` git add archivo1.txt archivo2.txt ````
    - Preparar todos los cambios en el repositorio: ```` git add . ````
    - Preparar todos los cambios en un directorio: ```` git add directorio/ ````

     Esto incluye todos los archivos nuevos, modificados y eliminados en el repositorio.

- El comando ```` git commit ```` en Git se utiliza para guardar los cambios del área de preparación (staging area) en el historial del repositorio. Es el paso donde confirmas los cambios que quieres registrar de forma permanente, creando un nuevo "snapshot" o punto de control en el historial de versiones.

    **Función de git commit:**
    1. Guarda los cambios preparados con ```` git add ```` en el repositorio local.
    2. Asocia esos cambios a un mensaje descriptivo, que explica lo que hiciste (por ejemplo, "corrige errores en el login").
    3. Crea un nuevo identificador único (SHA) que representa ese estado del repositorio, lo que permite rastrear los cambios fácilmente.

    **Sintaxis básica:**
    - Hacer un commit con un mensaje corto: ```` git commit -m "Tu mensaje aquí" ````
    - Abrir el editor para escribir un mensaje más detallado: ```` git commit ````
    - Hacer commit incluyendo automáticamente los cambios (saltándose git add): ```` git commit -a -m "Mensaje del commit" ````

- El comando ```` git push ```` en Git se utiliza para enviar los commits de tu repositorio local al repositorio remoto, como en GitHub, GitLab o cualquier servidor remoto configurado. Esto sincroniza tu trabajo local con el repositorio remoto, haciéndolo accesible para otros colaboradores.

    **¿Qué hace git push?**
    1. Sube los commits de una rama local a la rama remota correspondiente.
    2. Actualiza el repositorio remoto para reflejar los cambios que hiciste en tu máquina.
    3. Establece un vínculo entre tu rama local y la rama remota si no lo había.

    **Sintaxis básica:**
    - Enviar la rama actual al remoto: ```` git push ````
    - Especificar la rama remota: ```` git push origin main ```` (Esto sube los cambios de la rama ```` main ```` al remoto llamado ```` origin```` .)
    - Subir todas las ramas al remoto:  ```` git push --all ````

- El comando ```` git pull ```` en Git se utiliza para descargar y fusionar los cambios del repositorio remoto al repositorio local. Combina dos pasos en uno:
    1. ```` git fetch ````: Descarga los cambios más recientes del remoto (nuevos commits, archivos, ramas, etc.).
    2. ```` git merge ````: Fusiona automáticamente los cambios descargados con tu rama actual.

    **¿Qué hace exactamente git pull?**
    1. Sincroniza tu repositorio local con el remoto.
    2. Descarga los nuevos commits que no están en tu copia local.
    3. Combina esos commits con los cambios que ya tienes en tu rama activa.

    **Sintaxis básica:**
    - Actualizar la rama actual desde el remoto predeterminado: ````git pull ```` (Por defecto, sincroniza con el remoto vinculado a la rama actual.)
    - Actualizar desde un remoto y una rama específicos: ```` git pull <remote> <branch> ````

        **Ejemplo**
        
        ````git pull origin main ```` (Esto descarga los cambios de la rama ```` main ```` del remoto ```` origin ```` 
        y los fusiona con tu rama activa.)

    **Tipos de fusión al usar ```` git pull ````:**
    1. **Merge (fusión estándar)**:
        - Es la acción predeterminada.
        - Si no hay conflictos, Git combinará los cambios automáticamente.
        - Si hay conflictos (por ejemplo, si tú y alguien más modificaron la misma línea de un archivo), Git te pedirá que los resuelvas manualmente.
    2. **Rebase:**
        - Con ```` git pull --rebase ````, en lugar de fusionar los commits, Git aplica tus cambios locales "encima" de los cambios remotos. Esto mantiene un historial más limpio y lineal.
    
    **¿Cuándo usar ````git pull````?**
    - Cuando quieres asegurarte de que tu copia local está actualizada con los últimos cambios del remoto antes de trabajar o hacer un ````git push````.
    - Antes de comenzar a trabajar en una rama compartida con otras personas.
    - Cuando ves que tu repositorio local está desfasado con el remoto (puedes verificar esto con ````git fetch```` y ````git status````).

    **Nota importante:**  
    Si tienes cambios locales sin confirmar, Git no permitirá fusionar automáticamente los cambios remotos. Necesitarás:
    - Confirmar tus cambios (````git commit````).
    - O, si quieres descartarlos, usar ````git stash```` para guardarlos temporalmente:

        **Ejemplo:**  

        ````git stash````  
        ````git pull````  
        ````git stash pop````

- El comando ````git fetch```` se utiliza para descargar los cambios más recientes de un repositorio remoto a tu repositorio local sin integrarlos automáticamente en tu rama activa. Es decir, actualiza las referencias remotas (como ````origin/main```` o ````origin/feature-branch````), pero no modifica directamente el contenido de tus ramas locales.

    **¿Qué hace específicamente?**
    1. Obtiene las confirmaciones (commits), etiquetas, ramas y otros objetos actualizados del repositorio remoto.
    2. Actualiza las referencias remotas (almacenadas en ````.git/refs/remotes/````).
    3. Permite inspeccionar y comparar los cambios antes de fusionarlos o integrarlos en tu rama local.

    **Ejemplo práctico:**
    1. Ejecutas ````git fetch origin````.
    2. Git descarga las actualizaciones, pero tus ramas locales como ````main```` o ````feature-branch```` permanecen inalteradas.
    3. Puedes verificar los cambios con:
        - ````git log origin/main```` para revisar los commits más recientes en la rama remota.
        - ````git diff main origin/main```` para comparar tu rama local con la remota.

    **Diferencia con otros comandos:**
    - ````git pull````: Combina ````git fetch```` y ````git merge````. Descarga los cambios y los aplica automáticamente a tu rama activa.
    - ````git fetch````: Solo descarga los cambios, dándote la oportunidad de revisarlos antes de integrarlos.

    Es ideal cuando quieres mantener tu repositorio actualizado sin alterar tu trabajo actual.

- El comando ````git merge```` se utiliza para **combinar el historial de dos ramas en una sola**. Es decir, fusiona los cambios de una rama (normalmente una rama secundaria o remota) con tu rama actual, creando un nuevo commit de fusión si es necesario.

    **¿Qué hace específicamente?**
    1. Une los historiales de dos ramas.
    2. Integra los cambios realizados en la rama objetivo con los de tu rama actual.
    3. Puede realizarse automáticamente (fusión rápida) o requerir intervención si hay conflictos.

    **Tipos de fusiones (````git merge````):**
    1. **Fast-forward merge (avance rápido):**
        - Ocurre si tu rama actual está directamente "detrás" de la rama que quieres fusionar.
        - Git simplemente mueve el puntero de la rama actual al último commit de la otra rama.
        - No se crea un nuevo commit de fusión.

        **Ejemplo:**  
        ````git checkout main````  
        ````git merge feature-branch````

    2. **Three-way merge (fusión tridireccional):**
        - Sucede cuando ambas ramas tienen commits distintos y no relacionados.
        - Git encuentra el último ancestro común y combina los cambios desde ese punto.
        - Crea un nuevo commit para registrar la fusión.

        **Ejemplo:**  
        ````git checkout main````  
        ````git merge feature-branch````

        Si ambas ramas tienen commits diferentes, se genera un commit de fusión.

    **¿Qué pasa si hay conflictos?**
    - Si los cambios en las ramas afectan las mismas líneas de código, Git no podrá resolverlos automáticamente.
    - Tendrás que revisar manualmente los conflictos en los archivos afectados, modificarlos y luego marcarlos como resueltos:

        ````git add archivo_resuelto````  
        ````git commit````
    
    **Diferencia con otros comandos:**
    - ````git fetch````: Solo descarga los cambios remotos, sin combinarlos.
    - ````git pull````: Combina ````git fetch```` y ````git merge````. Descarga los cambios y luego los integra automáticamente.
    - ````git rebase````: En lugar de fusionar dos ramas, reescribe el historial colocando los commits de una rama "sobre" otra.

    **Resumen:**  
    ````git merge```` es ideal para unir ramas en Git cuando deseas mantener el historial de cambios de ambas ramas. Es muy útil en flujos de trabajo colaborativos donde se integran nuevas características o correcciones de errores.

- ````git restore --source```` El parámetro ````--source```` en ````git restore```` te permite restaurar un archivo o directorio desde un commit específico, una rama o una etiqueta, en lugar de solo revertirlo al último commit confirmado en la rama actual.

    **Sintaxis general:**  
    ````git restore --source <origen> <archivo>````  

    Donde:  
    - ````<origen>```` puede ser un commit, una rama, una etiqueta o un hash específico.
    - ````<archivo>```` es el archivo que quieres restaurar.

    **Ejemplos de uso:**
    1. **Restaurar un archivo desde un commit anterior específico:** ````git restore --source abc123 archivo.txt````
        - Restaura ````archivo.txt```` desde el commit con hash ````abc123````, sin afectar otros archivos.
    2. **Restaurar un archivo desde otra rama:** ````git restore --source develop archivo.txt````
        - Trae la versión más reciente de ````archivo.txt```` desde la rama ````develop````.
    3. **Restaurar todo el proyecto desde otro commit (sin cambiar de rama):** ````git restore --source 1a2b3c4d .````
        - Restaura todos los archivos al estado en el commit ````1a2b3c4d````, pero sin cambiar la referencia de la rama actual.
    4. **Restaurar un archivo y prepararlo para commit directamente (--staged):** ````git restore --source main --staged archivo.txt````
        - Recupera ````archivo.txt```` desde la rama ````main```` y lo deja en el área de preparación (````git add```` automático).

<h1>Hola desde la rama desarrollo</h1>
