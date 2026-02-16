// Auto-llenado de formularios para Recursos Educativos Digitales

// Función para llenar el formulario LORI del RED 1
function fillRED1LORI() {
    // Información del recurso
    document.querySelector('input[name="lori-nombre-recurso"]').value = "Proyecto, Y tú, qué haces por el medio";
    document.querySelector('input[name="lori-grado"]').value = "Décimo";
    document.querySelector('input[name="lori-area"]').value = "Ciencias";
    document.querySelector('textarea[name="lori-objetivos"]').value = "Reconocer problemáticas ambientales, analizar el impacto de las acciones humanas sobre el entorno y proponer alternativas de cuidado ambiental, fortaleciendo actitudes de responsabilidad y compromiso con el desarrollo sostenible.";
    document.querySelector('input[name="lori-repositorio"]').value = "Procomún";
    document.querySelector('input[name="lori-url"]').value = "https://procomun.intef.es/gl/ode/view/es_2025101412_9190540";
    
    // Descripción del recurso
    document.querySelector('textarea[name="lori-descripcion"]').value = "Recurso educativo digital en formato PDF orientado a promover la reflexión y acciones ambientales por parte del estudiantado. El documento contiene secciones explicativas, ejemplos y pautas para que los estudiantes elaboren un folleto sobre prácticas amigables con el medio ambiente, integrando contenidos del área de Geografía y medio ambiente";
    
    // Modelo de evaluación
    document.querySelector('textarea[name="lori-modelo-descripcion"]').value = "Instrumento de evaluación de la calidad de recursos educativos digitales que permite analizar aspectos pedagógicos, técnicos y de uso del recurso. Se enfoca en valorar la calidad del contenido, su alineación con los objetivos de aprendizaje, la retroalimentación, la motivación, el diseño, la usabilidad, la accesibilidad, la reusabilidad y el cumplimiento de estándares.\n\nLa valoración de cada criterio del modelo LORI se realizará mediante una escala tipo Likert de cinco niveles, en la cual cada valor representa el grado de cumplimiento del criterio evaluado.\n\n1. Muy bajo: El recurso no cumple con el criterio evaluado o lo hace de manera mínima e insuficiente. Presenta deficiencias significativas que limitan su uso pedagógico, técnico o comunicativo.\n2. Bajo: El recurso cumple parcialmente con el criterio, pero presenta múltiples limitaciones que afectan su efectividad educativa. Requiere mejoras sustanciales para responder adecuadamente a las necesidades del contexto escolar.\n3. Aceptable: El recurso cumple de forma aceptable con el criterio evaluado. Aunque presenta aspectos funcionales y pertinentes, aún muestra debilidades que pueden optimizarse para mejorar su calidad.\n4. Bueno: El recurso cumple en gran medida con el criterio evaluado. Presenta características claras, funcionales y adecuadas para su uso educativo, con pocas oportunidades de mejora.\n5. Excelente: El recurso cumple plenamente con el criterio evaluado. Evidencia alta calidad pedagógica, técnica y de diseño, respondiendo de manera óptima a los objetivos de aprendizaje y a los estándares de calidad de los Recursos Educativos Digitales.";
    
    // Criterios de evaluación - Marcar radio buttons y llenar notas
    // Criterio 1: Calidad de los contenidos - 4
    document.querySelector('input[name="lori-c1"][value="4"]').checked = true;
    document.querySelector('textarea[name="lori-c1-notas"]').value = "Calificación: alto porque el contenido del recurso es pertinente y coherente con conceptos ambientales definidos para décimo. La información está bien organizada y relacionada con prácticas sostenibles y reflexiones sobre medio ambiente. Aunque el contenido no profundiza en aspectos científicos complejos, cumple con generar comprensión para su nivel.";
    
    // Criterio 2: Adecuación de los objetivos - 4
    document.querySelector('input[name="lori-c2"][value="4"]').checked = true;
    document.querySelector('textarea[name="lori-c2-notas"]').value = "Calificación: alto porque el recurso se alinea con objetivos relacionados con la sensibilización ambiental y la construcción de materiales elaborados por estudiantes (folletos), lo cual puede integrarse con competencias de Ciencias Sociales y Naturales en un contexto de educación ambiental. Se observa coherencia entre lo propuesto y los aprendizajes esperados.";
    
    // Criterio 3: Feedback y adaptabilidad - 3
    document.querySelector('input[name="lori-c3"][value="3"]').checked = true;
    document.querySelector('textarea[name="lori-c3-notas"]').value = "Calificación: aceptable porque el recurso no incluye retroalimentación automática, pero las actividades y ejemplos invitan a la reflexión y discusión en aula, lo cual puede generar retroalimentación a través de la mediación docente. Por esto, se considera aceptable.";
    
    // Criterio 4: Motivación - 4
    document.querySelector('input[name="lori-c4"][value="4"]').checked = true;
    document.querySelector('textarea[name="lori-c4-notas"]').value = "Calificación: alto porque el recurso utiliza ejemplos cercanos a la vida cotidiana y genera interés al promover la reflexión y la toma de acciones ambientales, lo cual favorece la motivación de los estudiantes. El enfoque de proyecto invita al estudiante a participar activamente.";
    
    // Criterio 5: Diseño y presentación - 3
    document.querySelector('input[name="lori-c5"][value="3"]').checked = true;
    document.querySelector('textarea[name="lori-c5-notas"]').value = "Calificación: aceptable porque el PDF presenta una estructura clara, pero el uso de elementos visuales es limitado. Aunque es organizado, podría integrar más gráficos o diagramas para mejorar la presentación visual y facilitar la comprensión.";
    
    // Criterio 6: Usabilidad - 4
    document.querySelector('input[name="lori-c6"][value="4"]').checked = true;
    document.querySelector('textarea[name="lori-c6-notas"]').value = "Calificación: alto porque la navegación del PDF es intuitiva. El documento puede ser descargado y abierto en múltiples dispositivos sin mayores dificultades. Las secciones se encuentran bien estructuradas, aunque las instrucciones podrían ser más explícitas.";
    
    // Criterio 7: Accesibilidad - 3
    document.querySelector('input[name="lori-c7"][value="3"]').checked = true;
    document.querySelector('textarea[name="lori-c7-notas"]').value = "Calificación: aceptable porque el recurso es fácilmente accesible desde diferentes dispositivos, pero al ser PDF no siempre se adapta automáticamente a dispositivos móviles con pantallas pequeñas. Se sugiere poder ofrecer formatos alternativos para una mejor accesibilidad.";
    
    // Criterio 8: Reusabilidad - 5
    document.querySelector('input[name="lori-c8"][value="5"]').checked = true;
    document.querySelector('textarea[name="lori-c8-notas"]').value = "Calificación: excelente porque el recurso puede ser reutilizado en diferentes contextos educativos, tanto en proyectos de educación ambiental como en actividades transversales. Su estructura permite adaptarse a otros grados o temas relacionados con sostenibilidad.";
    
    // Criterio 9: Cumplimiento de estándares - 5
    document.querySelector('input[name="lori-c9"][value="5"]').checked = true;
    document.querySelector('textarea[name="lori-c9-notas"]').value = "Calificación: excelente porque el recurso cuenta con licencia Creative Commons clara y respetada, los derechos de autor están definidos y el PDF cumple con estándares básicos de calidad técnica y pedagógica para un RED educativo digital.";
    
    // Resultados
    document.querySelector('input[name="lori-puntuacion"]').value = "38/45 puntos";
    document.querySelector('textarea[name="lori-conclusiones"]').value = "Cada criterio fue observado directamente en el contexto del contenido del PDF y su adecuación al área de Educación Ambiental para estudiantes de décimo grado. Los resultados reflejan que el recurso cumple con altos estándares de reusabilidad y cumplimiento normativo, con buen desempeño en calidad de contenido, alineación con objetivos, motivación y usabilidad. Aspectos como diseño visual y retroalimentación presentaron niveles aceptables, lo que indica oportunidades de mejora para futuras aplicaciones.";
    
    // Firmas
    document.querySelector('input[name="lori-elaborado"]').value = "Angie Gabriela Garcia Rodriguez - Michell Dayana Hernandez Villarreal";
    document.querySelector('input[name="lori-revisado"]').value = "Juan Jose Botello Castellanos";
    
    // Ventajas y desventajas
    document.querySelector('textarea[name="lori-ventajas"]').value = "Permite una evaluación integral de los Recursos Educativos Digitales, al considerar dimensiones pedagógicas, técnicas y comunicativas de manera articulada, utilizando criterios claros y estandarizados que facilitan la objetividad y coherencia en el proceso de valoración con el uso de una escala tipo Likert, lo que posibilita cuantificar resultados sin perder el análisis cualitativo mediante justificaciones.";
    document.querySelector('textarea[name="lori-desventajas"]').value = "La valoración puede presentar cierto grado de subjetividad, especialmente cuando no se acompañan los criterios con descriptores detallados. Además, no contempla de manera explícita el impacto del recurso en el aprendizaje real del estudiante, sino que se centra en el análisis del recurso en sí.";
}

// Función para llenar el formulario CODA del RED 2
function fillRED2CODA() {
    // Información del recurso
    document.querySelector('input[name="coda-nombre-recurso"]').value = "Explorando los tipos de contaminación";
    document.querySelector('input[name="coda-grado"]').value = "Décimo";
    document.querySelector('input[name="coda-area"]').value = "Ciencias";
    document.querySelector('textarea[name="coda-objetivos"]').value = "Analizar los diferentes tipos de contaminación, sus causas y consecuencias, con el fin de promover actitudes críticas y responsables frente al cuidado del medio ambiente mediante procesos de investigación y reflexión.";
    document.querySelector('input[name="coda-repositorio"]').value = "Procomún";
    document.querySelector('input[name="coda-url"]').value = "https://procomun.intef.es/ode/view/es_2025040312_9151313";
    
    // Descripción del recurso
    document.querySelector('textarea[name="coda-descripcion"]').value = "El recurso educativo digital consiste en una actividad en formato PDF orientada a la exploración de los distintos tipos de contaminación ambiental. Propone una metodología basada en la investigación guiada, el análisis de información y la elaboración de productos escritos, lo que favorece el desarrollo del pensamiento crítico y la reflexión sobre problemáticas ambientales actuales en contextos educativos de educación secundaria.";
    
    // Modelo de evaluación
    document.querySelector('textarea[name="coda-modelo-descripcion"]').value = "Enfoque de evaluación cualitativa que orienta la toma de decisiones pedagógicas sobre el uso, selección y adaptación de Recursos Educativos Digitales. Se centra en el análisis del contenido, la coherencia didáctica, el diseño, la accesibilidad y la pertinencia del recurso en relación con el contexto educativo y los objetivos de aprendizaje.\n\nEscala: 1 = Muy bajo | 2 = Bajo | 3 = Aceptable | 4 = Alto | 5 = Excelente";
    
    // Criterios de evaluación - Marcar radio buttons y llenar notas
    // Criterio 1: Objetivos y coherencia didáctica - 4
    document.querySelector('input[name="coda-c1"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c1-notas"]').value = "4 porque los objetivos podrían formularse de manera más explícita dentro del documento.";
    
    // Criterio 2: Calidad de los contenidos - 4
    document.querySelector('input[name="coda-c2"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c2-notas"]').value = "4 porque podría enriquecerse con ejemplos locales o datos actualizados.";
    
    // Criterio 3: Capacidad de generar reflexión, críticas e innovación - 4
    document.querySelector('input[name="coda-c3"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c3-notas"]').value = "4 porque falta incluir actividades innovadoras apoyadas en herramientas digitales interactivas.";
    
    // Criterio 4: Interactividad y adaptabilidad - 3
    document.querySelector('input[name="coda-c4"][value="3"]').checked = true;
    document.querySelector('textarea[name="coda-c4-notas"]').value = "3 porque la interactividad digital es limitada, ya que no integra herramientas tecnológicas avanzadas, simuladores o retroalimentación automatizada.";
    
    // Criterio 5: Motivación - 4
    document.querySelector('input[name="coda-c5"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c5-notas"]').value = "4 porque las actividades están diseñadas de forma dinámica, aunque podría fortalecerse incorporando recursos multimedia más atractivos.";
    
    // Criterio 6: Formato y diseño - 3
    document.querySelector('input[name="coda-c6"][value="3"]').checked = true;
    document.querySelector('textarea[name="coda-c6-notas"]').value = "3 porque podría mejorarse con mayor variedad gráfica o recursos visuales interactivos.";
    
    // Criterio 7: Usabilidad - 4
    document.querySelector('input[name="coda-c7"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c7-notas"]').value = "4 porque el recurso es fácil de acceder desde el repositorio y su navegación es sencilla. No requiere conocimientos técnicos avanzados para su utilización. Sin embargo, depende de la conexión estable a internet para su consulta.";
    
    // Criterio 8: Accesibilidad - 3
    document.querySelector('input[name="coda-c8"][value="3"]').checked = true;
    document.querySelector('textarea[name="coda-c8-notas"]').value = "3 porque al tratarse de un PDF, puede presentar limitaciones para estudiantes con necesidades educativas especiales si no se realizan adaptaciones adicionales.";
    
    // Criterio 9: Reusabilidad - 5
    document.querySelector('input[name="coda-c9"][value="5"]').checked = true;
    document.querySelector('textarea[name="coda-c9-notas"]').value = "5 porque puede adaptarse a diferentes contextos, grados y áreas. Permite modificaciones según necesidades curriculares.";
    
    // Criterio 10: Interoperabilidad - 4
    document.querySelector('input[name="coda-c10"][value="4"]').checked = true;
    document.querySelector('textarea[name="coda-c10-notas"]').value = "4 porque el formato PDF permite su uso en múltiples plataformas y sistemas operativos. Aunque no es un recurso interactivo, es compatible con diferentes entornos tecnológicos educativos.";
    
    // Resultados
    document.querySelector('input[name="coda-puntuacion"]').value = "38/50 puntos";
    document.querySelector('textarea[name="coda-conclusiones"]').value = "El recurso educativo digital evaluado presenta un nivel alto de calidad, destacándose por la pertinencia de sus contenidos, su capacidad de promover la reflexión crítica y su alta reusabilidad en contextos educativos de Ciencias Naturales y Educación Ambiental. Aunque presenta limitaciones en interactividad y diseño visual, estas pueden ser compensadas mediante la mediación pedagógica del docente y la adaptación del recurso a estrategias didácticas más dinámicas.";
    
    // Firmas
    document.querySelector('input[name="coda-elaborado"]').value = "Nombre del(os) estudiante(s)";
    document.querySelector('input[name="coda-revisado"]').value = "Nombre del profesor";
    
    // Ventajas y desventajas
    document.querySelector('textarea[name="coda-ventajas"]').value = "Permite analizar el recurso desde una perspectiva pedagógica y contextual, favoreciendo la toma de decisiones sobre la adaptación y uso del RED. Además, promueve una evaluación reflexiva y se puede aplicar a diferentes contextos educativos.";
    document.querySelector('textarea[name="coda-desventajas"]').value = "Requiere análisis detallado que demanda tiempo, algunos criterios pueden ser subjetivos según el evaluador y no profundiza ampliamente en aspectos tecnológicos avanzados.";
}
