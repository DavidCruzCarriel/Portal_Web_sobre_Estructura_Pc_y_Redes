#!/bin/bash
# Script para ejecutar el servidor web del portal educativo
# Uso: ./run_server.sh [puerto]

PORT=${1:-8000}

echo "🚀 Iniciando Portal Educativo..."
echo "📍 Servidor ejecutándose en: http://localhost:$PORT"
echo "💡 Presiona Ctrl+C para detener el servidor"
echo ""

cd "$(dirname "$0")"

# Intentar con Python 3 primero
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
# Si Python 3 no está disponible, intentar con Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Error: Python no está instalado"
    echo "Por favor, instala Python 3 para ejecutar este servidor"
    exit 1
fi
