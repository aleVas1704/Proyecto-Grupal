## Apuntes Clase 2

Ignacio Alex Escobar Vasquez


### estados de git y como funciona todo

git gestiona cada archivo en 3 estados:

-directorio de trabajo (modificado):
  es la carpeta normal donde hacemos todo, creamos, modificamos o eliminamos archivos pero git todavia no lo tiene guardado o “asegurado”

-stage area (preparado):
  es como una zona de espera donde indicamos que cosas queremos guardar

-repositorio local (confirmado):
  es el historial, donde se guardan los cambios con commits, cada commit tiene un id (hash), es como un punto de guardado

Primero en el directorio de trabajo creo, modifico o elimino archivos → luego preparo lo que quiero guardar con `git add` → despues confirmo con `git commit`  y luego a futuro puedo sincronizar con un repositorio remoto

ejemplo que dieron:
directorio de trabajo = producto en venta
staging = carrito
repositorio = caja

### estados de archivos, cambios y comandos

git en el directorio de trabajo detecta los archivos y los clasifica en:

-untracked: archivo nuevo que git ve pero no tiene version anterior
-modified: archivo que ya existia pero fue modificado o alterado
comandos chidos:
-`git status` : muestra todo lo que esta pasando (si se modifico, borro o agrego algo)
- `git add archivo` o `git add .` :manda al staging
- `git restore archivo` : descarta cambios (como ctrl + z)
- `git restore --staged archivo` : lo saca del staging y vuelve al estado anterior
- `git commit -m "mensaje"` :guarda cambios en el repositorio
- `git log --oneline` : muestra historial resumido
- `git reset --soft HEAD~1` : vuelve al commit anterior como si el ultimo no existiera

 si borras un archivo, `git restore` lo puede recuperar
 si haces muchos cambios en un archivo y quieres volver, usas restore
 git siempre te avisa con `git status` si algo fue modificado, borrado o agregado

`.gitignore`:
sirve para ignorar archivos que no queremos que git vea o suba

se edita con:
`nano .gitignore`

### buenas practicas

hacer commits pequeños (no meter mucho codigo de golpe
 hacer commit cuando hagas algo que cambie la funcionalidad
 trabajar en cambios cortos y claros

mensajes de commit:

 en ingles
 sin punto final
 maximo unas 50 letras

tipos de commit:

- `feat` : nueva funcionalidad
- `fix` : error que afecta al usuario
- `perf` : mejora de rendimiento
- `build` : cambios del sistema
- `ci` : integracion continua
- `docs` : documentacion (esto usaremos bastante)
- `refactor` : cambios internos (ej: cambiar nombre de variables)
- `style`: formato (espacios, tabulaciones)
- `test` : pruebas

si el commit es muy grande:
usar `git commit` sin `-m` para escribir mas detalle


