---

•	Permite experimentar sin riesgo, retroceder versiones, crear líneas de trabajo paralelas (ramas) y mantener orden en equipos.
•	Reemplaza el uso de respaldos manuales, carpetas duplicadas o archivos renombrados como “final_v2_definitivo.html”.

3. ¿Qué es Git?
“Git es un sistema de control de versiones distribuido, diseñado para administrar proyectos que evolucionan constantemente. Cada copia del repositorio contiene el historial completo, lo que permite:
	trabajar sin conexión
	crear ramas
	mantener trazabilidad
	garantizar integridad de datos mediante algoritmos criptográficos (SHA-1)

Explicación docente oral:
“Git no guarda archivos completos cada vez, sino diferencias muy eficientes. Es como un sistema que registra fotografías del proyecto, pero solo almacena lo que cambió entre una foto y otra.”

4. Control de versiones
Texto para la diapositiva:
“Control de versiones es un sistema que registra los cambios realizados en archivos a lo largo del tiempo, permitiendo: 
Configuración inicial (git config)
Versión mejorada:

git config --global user.name "Nombre Apellido"
git config --global user.email "correo@ejemplo.com"
git config --list

Notas:
•	Esta configuración se almacena localmente y establece tu identidad en los commits.
•	No configura permisos en GitHub; solo define el autor de los cambios.

________________________________________
8. Metáfora de la mudanza (puedes mantenerla)
La dejo mejor explicada técnicamente:
•	git init → abrir la caja
•	git add → colocar objetos en la caja
•	git commit → cerrar la caja con una etiqueta
•	git push → enviar la caja al destino (repositorio remoto)
•	git status → verificar en qué etapa estás
________________________________________
9. git init
Explicación mejorada:
“git init convierte una carpeta común en un repositorio Git, creando la carpeta oculta .git que contiene el historial, las ramas, los objetos y la configuración interna.”
________________________________________
10. git add
Claridad técnica:
“git add agrega archivos al área de preparación (staging area). Aquí el desarrollador selecciona qué cambios formarán parte del próximo commit.”
________________________________________
11. git commit
“git commit guarda un snapshot permanente del estado preparado del proyecto. Cada commit contiene autor, fecha, mensaje descriptivo y un hash único que lo identifica.”
________________________________________
12. git push
“git push envía los commits locales al repositorio remoto para sincronizarlo con la rama especificada.”
________________________________________
13. git status
Tu texto está bien, solo agrego una línea docente:
“Es el comando diagnóstico más importante. Antes de cualquier operación relevante, es recomendable ejecutarlo.”
________________________________________
14. Cambios de nombre (git mv)
Puedes usar esta definición precisa:
“git mv renombra un archivo manteniendo su historial, actualizando las referencias internas del índice de Git sin perder trazabilidad.”
________________________________________
15. .gitignore
Versión optimizada:
“El archivo .gitignore define patrones de archivos y carpetas que nunca deben incluirse en el historial, tales como archivos temporales, credenciales, binarios o configuraciones locales.”
________________________________________
16. Ramas
Aquí te ofrezco una versión profunda pero simple para mostrar en diapositiva:
“Una rama es un puntero que representa una línea de desarrollo independiente. Permite crear funcionalidades o experimentos sin afectar la rama principal.”
Explicación oral (crucial):
“Las ramas no son carpetas. Git cambia el contenido del proyecto reconstruyendo los archivos según el commit de la rama activa.”
________________________________________
17. Creación de ramas
Tu PPT trae los comandos incompletos. Los dejo corregidos:
Crear rama:
git branch nombre_rama
Crear y cambiarse en una sola operación:
git switch -c nombre_rama
Cambiar de rama:
git switch main
Eliminar rama:
git branch -d nombre_rama
Enviar rama remota:
git push -u origin nombre_rama
________________________________________
18. Merge y conflictos
Explicación mejorada para tus alumnos:
•	git merge combina la historia de dos ramas.
•	Si Git no puede fusionar automáticamente, aparecen conflictos.
•	Los conflictos deben resolverse manualmente editando los archivos.
•	Luego se deben marcar como resueltos con git add.
________________________________________
19. git log y restauración
Versión más profunda:
git log --oneline permite visualizar el historial en formato compacto.
Para regresar un archivo a un commit específico:
git checkout <id_commit> -- archivo.txt
Para regresar todo el proyecto:
git checkout <id_commit>
________________________________________
20. Tags
Texto profesional:
“Un tag marca un punto específico e importante en el historial del proyecto, útil para lanzar versiones estables.”
________________________________________
21. Stash y Rebase
Explicaciones refinadas:
Stash:
Guarda temporalmente cambios no confirmados sin necesidad de comprometerlos. Limpia el working directory para cambiar de contexto.
git stash
git stash pop
Rebase:
Reescribe la historia aplicando commits sobre otra base, lo que crea un historial lineal y ordenado.
________________________________________
22. GitHub – repositorios remotos
Explicación clara:
“GitHub es un servicio en la nube que almacena repositorios Git, permitiendo colaboración, trabajo distribuido y publicación de código.”
________________________________________
23. git push / git pull / git fetch
Definiciones precisas:
•	git push: envía cambios locales al remoto.
•	git pull: descarga cambios remotos y los fusiona.
•	git fetch: descarga cambios remotos pero no los integra; permite revisarlos antes.
________________________________________
24. Clonar repositorios
Versión correcta:
git clone <url_del_repositorio>
________________________________________
25. Flujos de trabajo colaborativo
Tu contenido está correcto, pero lo refuerzo:
•	Fork → copia personal del proyecto.
•	Clone → traer el repositorio a tu equipo.
•	Branch → crear una rama para trabajar.
•	Commit → guardar cambios.
•	Push → enviar cambios.
•	Pull Request → solicitar revisión.
•	Merge → integrar cambios aprobados.
________________________________________
26. Sincronización con upstream
La explicación está bien. Solo agrego tu frase docente:
“Un desarrollador que trabaja con forks debe mantener su copia sincronizada con el original para evitar divergencias y conflictos futuros.”
________________________________________
27. Markdown
Mejora conceptual:
“Markdown permite documentar un repositorio con un archivo legible y fácilmente convertible a HTML. GitHub lo interpreta automáticamente para presentar la documentación del proyecto.”
________________________________________
28. Pull Requests
Versión resumen formal:
“Un Pull Request es una solicitud para integrar cambios desde una rama o un fork hacia el repositorio principal. Permite revisión, comentarios, revisión de código y control de calidad antes de fusionar.”
________________________________________
29. GitHub Pages
Puedes agregar esta frase:
“GitHub Pages permite publicar sitios estáticos directamente desde un repositorio, sin servidores, configuraciones ni costos adicionales.”
________________________________________
30. Anexos: Terminal y comandos del sistema operativo
Tu contenido está correcto. Solo ajusté conceptos menores para mayor precisión.
________________________________________

