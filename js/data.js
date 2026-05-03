export const notes = [
  {
    id: "clase-1",
    classNumber: "Clase 1",
    title: "Introducción a Git",
    category: "basico",
    level: "Básico",
    summary: "Conceptos iniciales sobre control de versiones.",
    description: "Git permite guardar cambios y volver a versiones anteriores.",
    commands: [
      { command: "git --version", description: "Verifica Git." },
      { command: "git config --global user.name \"Tu Nombre\"", description: "Configura nombre." },
      { command: "git config --global user.email \"correo@gmail.com\"", description: "Configura correo." }
    ],
    tags: ["Git", "Versiones"]
  },

  {
    id: "clase-2",
    classNumber: "Clase 2",
    title: "Repositorio, estados y commits",
    category: "basico",
    level: "Básico",
    summary: "Uso de status, add y commit.",
    description: "Se trabajan los estados del repositorio y commits.",
    commands: [
      { command: "git status", description: "Ver estado." },
      { command: "git add .", description: "Agregar cambios." },
      { command: "git commit -m \"mensaje\"", description: "Guardar cambios." }
    ],
    tags: ["Commit"]
  },

  {
    id: "clase-3",
    classNumber: "Clase 3",
    title: "GitHub y conexión SSH",
    category: "github",
    level: "Intermedio",
    summary: "Uso de SSH con GitHub.",
    description: "Permite conexión segura sin contraseña.",
    commands: [
      { command: "ssh-keygen -t ed25519 -C \"correo@gmail.com\"", description: "Crear llave." },
      { command: "cat ~/.ssh/id_ed25519.pub", description: "Ver llave." },
      { command: "ssh -T git@github.com", description: "Probar conexión." }
    ],
    tags: ["SSH"]
  },

  {
    id: "clase-4",
    classNumber: "Clase 4",
    title: "Ramas en Git",
    category: "ramas",
    level: "Intermedio",
    summary: "Uso de ramas.",
    description: "Permiten trabajar sin afectar main.",
    commands: [
      { command: "git branch", description: "Listar ramas." },
      { command: "git switch -c feature/nueva-rama", description: "Crear rama." },
      { command: "git switch develop", description: "Cambiar rama." }
    ],
    tags: ["Branch"]
  },

  {
    id: "clase-5",
    classNumber: "Clase 5",
    title: "Pull Requests",
    category: "github",
    level: "Intermedio",
    summary: "Revisión y unión de cambios en GitHub.",
    description:
      "Un Pull Request permite proponer cambios desde una rama hacia otra para revisión antes de integrar al proyecto.",
    commands: [
      { command: "git push -u origin feature/nombre-rama", description: "Subir rama." },
      { command: "base: develop", description: "Rama destino." },
      { command: "compare: feature/nombre-rama", description: "Rama origen." }
    ],
    tags: ["Pull Request", "GitHub"]
  }
];
