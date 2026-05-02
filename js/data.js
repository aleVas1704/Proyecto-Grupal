export const notes = [
  {
    id: "clase-1",
    classNumber: "Clase 1",
    title: "Introducción a Git",
    category: "basico",
    level: "Básico",
    summary: "Conceptos iniciales sobre control de versiones y utilidad de Git.",
    description:
      "Git es un sistema de control de versiones que permite guardar cambios, revisar el historial del proyecto y volver a versiones anteriores cuando sea necesario.",
    commands: [
      {
        command: "git --version",
        description: "Verifica que Git esté instalado en la computadora."
      },
      {
        command: "git config --global user.name \"Tu Nombre\"",
        description: "Configura el nombre que aparecerá en los commits."
      },
      {
        command: "git config --global user.email \"correo@gmail.com\"",
        description: "Configura el correo que aparecerá asociado a los commits."
      }
    ],
    tags: ["Git", "Versiones", "Configuración"]
  },

  {
    id: "clase-2",
    classNumber: "Clase 2",
    title: "Repositorio, estados y commits",
    category: "basico",
    level: "Básico",
    summary: "Flujo básico de trabajo usando status, add y commit.",
    description:
      "Se estudiaron los estados principales de Git: directorio de trabajo, stage area y repositorio local. También se practicó cómo guardar cambios mediante commits.",
    commands: [
      {
        command: "git status",
        description: "Muestra el estado actual de los archivos."
      },
      {
        command: "git add .",
        description: "Agrega todos los cambios al área de preparación."
      },
      {
        command: "git commit -m \"mensaje\"",
        description: "Guarda los cambios en el historial del repositorio local."
      }
    ],
    tags: ["Commit", "Stage", "Repositorio"]
  },

  {
    id: "clase-3",
    classNumber: "Clase 3",
    title: "GitHub y conexión SSH",
    category: "github",
    level: "Intermedio",
    summary: "Configuración de llaves SSH para trabajar con GitHub.",
    description:
      "Se configuró una conexión segura entre la computadora y GitHub mediante una llave SSH. Esto permite clonar, hacer push y trabajar sin escribir contraseña cada vez.",
    commands: [
      {
        command: "ssh-keygen -t ed25519 -C \"correo@gmail.com\"",
        description: "Crea una nueva llave SSH."
      },
      {
        command: "cat ~/.ssh/id_ed25519.pub",
        description: "Muestra la llave pública que se debe copiar en GitHub."
      },
      {
        command: "ssh -T git@github.com",
        description: "Prueba si la conexión SSH con GitHub funciona."
      }
    ],
    tags: ["SSH", "GitHub", "Keygen"]
  }
];
