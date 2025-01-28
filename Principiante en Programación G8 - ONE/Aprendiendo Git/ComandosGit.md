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
    - **Preparar un archivo específico:** ```` git add archivo.txt ````
    - **Preparar múltiples archivos:** ```` git add archivo1.txt archivo2.txt ````
    - **Preparar todos los cambios en el repositorio:** ```` git add . ````
    - **Preparar todos los cambios en un directorio:** ```` git add directorio/ ````
    
     Esto incluye todos los archivos nuevos, modificados y eliminados en el repositorio.
