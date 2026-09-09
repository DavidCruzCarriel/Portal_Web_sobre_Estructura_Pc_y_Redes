# 🎓 Arquitectura de Computadores, Redes y Forensia Digital

## 📋 Descripción del Proyecto

Portal educativo interactivo desarrollado en **HTML5, CSS3 y JavaScript vanilla** que presenta conceptos fundamentales sobre:

- **Módulo 1:** Arquitectura y estructura de computadores
- **Módulo 2:** Fundamentos de redes de comunicaciones  
- **Módulo 3:** Aplicación en investigación de ciberdelitos

El sitio está diseñado para estudiantes y profesionales que desean comprender los fundamentos técnicos de sistemas informáticos y su aplicación en la investigación forense digital.

## ✨ Características Principales

- 📱 **Diseño Responsive:** Funciona perfectamente en ordenador, tablet y dispositivos móviles
- 🎨 **Interfaz Moderna:** Tema oscuro/tecnológico con colores azul, cian y tonos acentuantes
- 🔄 **Totalmente Interactivo:** Animaciones, efectos hover y componentes interactivos
- 🚀 **Sin Dependencias Externas:** Únicamente HTML5, CSS3 y JavaScript vanilla
- 👁️ **Accesible:** Elementos con etiquetas semánticas y atributos ARIA
- ⚡ **Rendimiento:** Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y diseño responsive
- **JavaScript Vanilla** - Interactividad sin frameworks
- **SVG** - Diagramas y elementos vectoriales

## 📁 Estructura del Proyecto

```
/
├── index.html              # Archivo principal
├── css/
│   └── styles.css         # Estilos y diseño responsive
├── js/
│   └── script.js          # Lógica interactiva
├── img/                   # Carpeta para imágenes (si se necesitan)
└── README.md             # Este archivo
```

## 📚 Contenido del Sitio

### Módulo 1: Arquitectura y Estructura de Computadores

#### 1. Componentes Principales de la CPU
- **ALU (Unidad Aritmético-Lógica):** Realiza operaciones aritméticas y lógicas
- **UC (Unidad de Control):** Coordina y controla las operaciones del procesador
- **Registros:** Almacenamiento de alta velocidad dentro de la CPU

#### 2. Ciclo de Instrucción
Presentación interactiva del ciclo **Fetch → Decode → Execute**:
- **Fetch:** Obtención de instrucción
- **Decode:** Interpretación de la instrucción
- **Execute:** Ejecución de la operación

#### 3. Jerarquía de Memoria
Visualización de la jerarquía y características:
- Registros (velocidad máxima, capacidad mínima)
- Caché L1/L2
- Memoria RAM
- Almacenamiento secundario

### Módulo 2: Fundamentos de Redes de Comunicaciones

#### 1. Conceptos Básicos
Explicación de:
- Red informática
- Dispositivos de red
- Nodos
- Medios de transmisión
- Protocolos
- Comunicación de datos

#### 2. Direcciones IP y MAC
Comparación interactiva entre:
- **Dirección IP:** Identificador lógico (IPv4/IPv6)
- **Dirección MAC:** Identificador físico (hexadecimal)

#### 3. Topologías Físicas de Red
Análisis detallado de:
- **Topología Estrella:** Dispositivo central
- **Topología Anillo:** Dispositivos en círculo
- **Topología Bus:** Medio compartido

### Módulo 3: Aplicación en Investigación de Ciberdelitos

#### Análisis Interactivo de:
- **Memoria RAM:** Información volátil y temporal
- **Registros:** Eventos persistentes del sistema
- **Tráfico de Red:** Comunicaciones entre dispositivos

#### Correlación de Evidencias
Visualización de cómo correlacionar información de:
- RAM (procesos activos)
- Registros (línea temporal)
- Tráfico (comunicaciones)

## 🎮 Elementos Interactivos

### 1. Menú Responsivo
- Navegación hamburguesa en dispositivos móviles
- Desplazamiento suave entre secciones
- Indicador visual de sección activa

### 2. Animación del Ciclo de Instrucción
Botón interactivo que visualiza el ciclo Fetch-Decode-Execute con animaciones en tiempo real.

### 3. Selector de Análisis Forense
Componente que permite seleccionar y explorar RAM, Registros o Tráfico de Red, mostrando información específica de cada elemento.

### 4. Botón de Regreso al Inicio
Botón flotante que aparece después de desplazarse por la página, permitiendo volver al inicio suavemente.

### 5. Indicador de Progreso de Lectura
Barra de progreso en la parte superior que muestra el porcentaje de página leída.

## 🚀 Cómo Ejecutar en GitHub Codespaces

### Opción 1: Usar Live Server

1. Abre el proyecto en GitHub Codespaces
2. Instala la extensión "Live Server" en VS Code (si no la tienes)
3. Haz clic derecho en `index.html` → "Open with Live Server"
4. El navegador abrirá automáticamente con el sitio

### Opción 2: Usar Python

1. En la terminal de Codespaces, navega al directorio del proyecto:
```bash
cd /workspaces/Portal_Web_sobre_Estructura_Pc_y_Redes
```

2. Inicia un servidor web local:
```bash
# Python 3
python -m http.server 8000

# O Python 2
python -m SimpleHTTPServer 8000
```

3. Abre el navegador en: `http://localhost:8000`

### Opción 3: Usar Node.js (http-server)

1. Instala http-server globalmente:
```bash
npm install -g http-server
```

2. En la terminal, ejecuta:
```bash
http-server
```

3. Abre el navegador en la URL indicada (normalmente `http://localhost:8080`)

## 📋 Requisitos Cumplidos

- ✅ HTML5 semántico con etiquetas apropiadas
- ✅ CSS3 con variables, Flexbox, Grid y Media Queries
- ✅ JavaScript vanilla sin frameworks
- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones CSS y transiciones
- ✅ Interactividad completa
- ✅ Imágenes con atributos `alt` descriptivos
- ✅ Navegación funcional y fluida
- ✅ Código limpio y comentado
- ✅ Accesibilidad (ARIA labels, etiquetas semánticas)
- ✅ Botones interactivos que funcionan correctamente
- ✅ Menú responsivo para dispositivos móviles

## 🎨 Diseño y Paleta de Colores

### Colores Principales
- **Azul Primario:** #0099ff
- **Cian Secundario:** #00d4ff
- **Verde Acentuante:** #00ff88
- **Fondo Oscuro:** #0a0e27
- **Tarjetas:** #1a1f3a

### Tipografía
- Fuente principal: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Fuente monoespaciada: Courier New (para código)

## 📱 Puntos de Quiebre Responsivos

- **Desktop:** 1200px (ancho máximo del contenido)
- **Tablet:** 768px y menos
- **Móvil:** 480px y menos

## ⚙️ Funcionalidades JavaScript

### Inicializadas Automáticamente
1. Menú hamburguesa responsivo
2. Desplazamiento suave de enlaces internos
3. Botón de regreso al inicio
4. Animación interactiva del ciclo de instrucción
5. Selector de análisis forense
6. Animaciones de elementos al hacer scroll
7. Efectos hover en tarjetas
8. Indicador de progreso de lectura
9. Navegación activa según sección visible
10. Validación de integridad de la página

## 🔍 Verificación de Funcionalidad

Antes de finalizar, se han verificado:
- ✅ Todos los enlaces internos funcionan correctamente
- ✅ No hay errores de JavaScript en la consola
- ✅ El diseño es responsive en diferentes tamaños
- ✅ Las imágenes tienen atributos alt descriptivos
- ✅ Los botones interactivos responden correctamente
- ✅ El menú funciona en dispositivos móviles
- ✅ Las animaciones son suaves y no invasivas
- ✅ El contenido es académico y educativo

## 📖 Uso Educativo

Este sitio está diseñado para:
- 📚 Estudiantes de informática y redes
- 🔒 Profesionales de ciberseguridad
- 🔎 Investigadores forenses
- 💼 Administradores de sistemas
- 👨‍💻 Desarrolladores que desean aprender fundamentos

## 🤝 Contribuciones

Este es un proyecto educativo. Para mejoras o sugerencias, considera:
- Agregar más diagramas SVG
- Expandir las secciones con más ejemplos
- Traducir a otros idiomas
- Agregar videos explicativos
- Crear ejercicios interactivos adicionales

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 📞 Soporte

Para reportar problemas o hacer preguntas sobre el contenido, revisa:
1. La consola del navegador (F12) para errores
2. Verifica que todos los archivos están en sus carpetas correctas
3. Asegúrate de que el navegador soporta ES6+ (Chrome, Firefox, Safari, Edge modernos)

---

**Desarrollado con ❤️ para la educación tecnológica**

*Última actualización: 2024*
