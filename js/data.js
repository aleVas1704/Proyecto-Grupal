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
      { command: "git --version", description: "Verifica que Git esté instalado en la computadora." },
      { command: "git config --global user.name \"Tu Nombre\"", description: "Configura el nombre del commit." },
      { command: "git config --global user.email \"correo@gmail.com\"", description: "Configura el correo del commit." }
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
      "Se estudiaron los estados principales de Git y cómo guardar cambios mediante commits.",
    commands: [
      { command: "git status", description: "Muestra el estado actual." },
      { command: "git add .", description: "Agrega cambios al stage." },
      { command: "git commit -m \"mensaje\"", description: "Guarda cambios." }
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
      "Se configuró una conexión segura con GitHub usando llaves SSH.",
    commands: [
      { command: "ssh-keygen -t ed25519 -C \"correo@gmail.com\"", description: "Crea llave SSH." },
      { command: "cat ~/.ssh/id_ed25519.pub", description: "Ver llave pública." },
      { command: "ssh -T git@github.com", description: "Probar conexión." }
    ],
    tags: ["SSH", "GitHub", "Keygen"]
  },

  {
    id: "clase-4",
    classNumber: "Clase 4",
    title: "Ramas en Git",
    category: "ramas",
    level: "Intermedio",
    summary: "Uso de ramas para separar funcionalidades del proyecto.",
    description:
      "Las ramas permiten trabajar en nuevas funcionalidades sin afectar la rama principal. Son clave para trabajo en equipo.",
    commands: [
      { command: "git branch", description: "Lista las ramas." },
      { command: "git switch -c feature/nueva-rama", description: "Crear nueva rama." },
      { command: "git switch develop", description: "Cambiar a develop." }
    ],
    tags: ["Branch", "Switch", "Feature"]
  }
];
