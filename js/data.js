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
  }
];
