function socket(io) {
    io.on("connection", (socket) => {
        socket.on("pregunta", (pregunta) => {
            var respuesta = obtenerRespuesta(pregunta);
            socket.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuesta(pregunta) {
    switch (pregunta) {
        case "1":
            return "La inteligencia artificial (IA) tiene una amplia gama de aplicaciones en la vida cotidiana, especialmente en la atención médica. ";
        case "2":
            return " La ciberseguridad en la era de la IoT es crucial porque la proliferación de dispositivos conectados aumenta la superficie de ataque";
        case "3":
            return "Puede mejorar la atención médica al proporcionar un seguimiento continuo de los signos vitales y datos de salud en tiempo real";
        case "4":
            return "La IA puede mejorar la gestión de registros médicos mediante la automatización de tareas de organización y análisis de datos";
        case "5":
            return "La asistencia virtual basada en inteligencia artificial puede mejorar la accesibilidad a la atención médica al proporcionar respuestas inmediatas a preguntas comunes";
        default:
            return "Lo siento, no lo sé.";
    }
}

module.exports = socket;