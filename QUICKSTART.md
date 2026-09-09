# ⚡ Guía Rápida - Portal Educativo

## 🚀 Inicio Rápido en 30 segundos

### Opción 1: Usar Live Server (Más Fácil)
```bash
# En VS Code:
1. Haz clic derecho en index.html
2. Selecciona "Open with Live Server"
3. ¡Listo! El navegador abre automáticamente
```

### Opción 2: Usar el Script (Recomendado)
```bash
# En la terminal del Codespace:
cd /workspaces/Portal_Web_sobre_Estructura_Pc_y_Redes
./run_server.sh
# O especificar puerto:
./run_server.sh 3000
```

### Opción 3: Comando Manual Python
```bash
cd /workspaces/Portal_Web_sobre_Estructura_Pc_y_Redes
python3 -m http.server 8000
```

Luego abre: **http://localhost:8000**

---

## 📚 Contenido Principal

| Módulo | Temas | Duración |
|--------|-------|----------|
| **1** | CPU, Memoria, Ciclo de Instrucción | 20 min |
| **2** | Redes, IP/MAC, Topologías | 20 min |
| **3** | Forensia Digital, Correlación | 15 min |

---

## ✅ Características Principales

- ✨ **Interfaz Moderna** - Tema oscuro/tecnológico
- 🎮 **Totalmente Interactivo** - Botones, animaciones, selectores
- 📱 **Responsive** - Funciona en todos los dispositivos
- 🔒 **Sin Dependencias** - Solo HTML, CSS y JavaScript
- ⚡ **Rápido** - Carga instantánea

---

## 🎯 Elementos Interactivos

### 🔄 Animación Fetch-Decode-Execute
- Botón en Módulo 1
- Visualiza el ciclo de instrucción en tiempo real
- Se repite automáticamente

### 🌐 Selector Forense (Módulo 3)
- Elige: RAM, Registros o Tráfico
- Ve detalles específicos de cada fuente
- Incluye ejemplos prácticos

### 🔝 Botón de Regreso
- Aparece al desplazarse
- Vuelve al inicio suavemente

### 📊 Barra de Progreso
- En la parte superior
- Muestra cuánto has leído

---

## 🎨 Colores y Diseño

| Color | Uso |
|-------|-----|
| 🔵 #0099ff | Azul Primario |
| 🔷 #00d4ff | Cian (Destacados) |
| 💚 #00ff88 | Verde (Acentos) |
| ⬛ #0a0e27 | Fondo Oscuro |

---

## 📁 Estructura de Carpetas

```
Portal_Web_sobre_Estructura_Pc_y_Redes/
├── index.html           ← Archivo principal
├── css/
│   └── styles.css      ← Estilos y animaciones
├── js/
│   └── script.js       ← Interactividad
├── run_server.sh       ← Script para iniciar servidor
├── README.md           ← Documentación completa
└── QUICKSTART.md       ← Este archivo
```

---

## 🔧 Solución de Problemas

### ❌ "No puedo abrir el servidor"
```bash
# Asegúrate de estar en la carpeta correcta:
cd /workspaces/Portal_Web_sobre_Estructura_Pc_y_Redes

# Verifica que Python está instalado:
python3 --version
```

### ❌ "El puerto 8000 está en uso"
```bash
# Usa otro puerto:
python3 -m http.server 9000
# Luego abre: http://localhost:9000
```

### ❌ "Los estilos no se cargan"
- Asegúrate de que CSS está en: `css/styles.css`
- Verifica que JavaScript está en: `js/script.js`
- Recarga la página (Ctrl+Shift+R)

---

## 📖 Navegación del Portal

**Barra de Navegación Fija:**
- 🏠 **Inicio** - Introducción
- 📖 **Módulo 1** - Arquitectura
- 🌐 **Módulo 2** - Redes
- 🔎 **Módulo 3** - Forensia
- 📝 **Conclusiones** - Reflexión final

**En Móvil:**
- Menú Hamburguesa (3 líneas) en la esquina superior derecha

---

## 💡 Consejos de Uso

1. **Lee en orden:** Módulo 1 → 2 → 3 para entender la progresión
2. **Experimenta:** Usa todos los botones interactivos
3. **Nota conceptos:** Copia el contenido que te interese
4. **Regresa después:** El navegador guarda tu progreso

---

## 🔗 Enlaces Rápidos

- [Ir al README completo](README.md)
- [Ver el código HTML](index.html)
- [Ver los estilos CSS](css/styles.css)
- [Ver el JavaScript](js/script.js)

---

## ✍️ Notas Importantes

- El portal **no requiere conexión a internet** después de cargarse
- Todos los datos se procesan **localmente** en tu navegador
- No hay cookies ni almacenamiento externo
- **Completamente privado y seguro**

---

**¿Necesitas ayuda? Revisa la consola del navegador (F12 → Console) para mensajes de depuración.**

*Creado con ❤️ para la educación tecnológica*
