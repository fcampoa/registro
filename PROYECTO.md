# 🐄 Registro Ganadero - Sistema de Gestión Ganadera

Un sistema web completo para el registro y gestión de ganado, desarrollado con React y TypeScript. Diseñado para ayudar a ganaderos de todos los tamaños a mantener registros detallados de sus animales, gestionar la salud del ganado y manejar pagos de membresías.

## ✨ Características Principales

### 🏠 Página Principal
- Página de inicio atractiva con información del servicio
- Secciones de misión, visión y contacto
- Planes de membresía con precios transparentes
- Navegación responsive con barra superior

### 🔐 Sistema de Autenticación
- Registro de nuevos usuarios con validación completa
- Inicio de sesión seguro
- Roles de usuario (Usuario regular y Administrador)
- Gestión de sesiones

### 📊 Dashboard de Usuario
- Panel principal con estadísticas del ganado
- Resumen de actividad reciente
- Alertas importantes (vacunaciones, pagos pendientes)
- Gráficos de estado de salud del ganado

### 🐮 Gestión de Animales
- **Lista de Ganado**: Vista completa de todos los animales registrados
  - Búsqueda por nombre o raza
  - Filtros por estado de salud
  - Información detallada de cada animal
- **Registro de Animales**: Proceso paso a paso
  - Información básica (nombre, especie, raza, fecha de nacimiento)
  - Datos de salud (estado actual, vacunas, exámenes veterinarios)
  - Subida de documentos y fotografías
  - Confirmación y pago

### 👤 Gestión de Cuenta
- Edición de perfil personal
- Información de contacto
- Configuración de seguridad
- Historial de membresía

### 💳 Sistema de Membresías
- **Plan Básico** ($29.99/mes): Hasta 10 animales
- **Plan Premium** ($59.99/mes): Hasta 50 animales
- **Plan Enterprise** ($199.99/mes): Animales ilimitados
- Comparación detallada de planes
- Facturación mensual y anual (con descuentos)
- Integración con PayPal para pagos

### 🔧 Panel de Administración (Solo Administradores)
- **Gestión de Veterinarios**:
  - Lista completa de veterinarios registrados
  - Aprobación/desactivación de veterinarios
  - Información de contacto y especialización
  - Estadísticas del sistema

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.2.0 + TypeScript
- **Enrutamiento**: React Router DOM
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Herramientas de Desarrollo**: Vite
- **Linting**: ESLint

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 20.19+ o 22.12+
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd registro
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 👥 Usuarios de Prueba

El sistema incluye datos de prueba para facilitar la exploración:

### Administrador
- **Email**: admin@ejemplo.com
- **Contraseña**: password123
- **Acceso**: Panel completo + sección de administración

### Usuario Regular
- **Email**: ganadero@ejemplo.com
- **Contraseña**: password123
- **Acceso**: Dashboard de usuario con 3 animales registrados

## 🎯 Funcionalidades Destacadas

### Simulación de Pagos con PayPal
- Interfaz realista de PayPal para testing
- Procesamiento simulado de pagos
- Confirmaciones de transacciones
- Manejo de cancelaciones

### Gestión Completa de Animales
- Registro paso a paso con validaciones
- Seguimiento de salud y vacunas
- Alertas automáticas
- Estados de pago por animal

### Dashboard Intuitivo
- Métricas en tiempo real
- Gráficos de estado de salud
- Actividad reciente
- Alertas importantes

### Administración Avanzada
- Control total sobre veterinarios
- Estadísticas del sistema
- Aprobación de nuevos profesionales

## 📱 Responsive Design

El sistema está completamente optimizado para:
- 💻 Escritorio (1920px+)
- 💻 Laptop (1024px+)
- 📱 Tablet (768px+)
- 📱 Móvil (320px+)

## 🗂️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Navbar.tsx       # Barra de navegación principal
│   ├── Sidebar.tsx      # Menú lateral del dashboard
│   ├── DashboardLayout.tsx # Layout del dashboard
│   └── PayPalButton.tsx # Simulador de PayPal
├── pages/               # Páginas principales
│   ├── HomePage.tsx     # Página de inicio
│   ├── LoginPage.tsx    # Inicio de sesión
│   ├── RegisterPage.tsx # Registro de usuario
│   ├── Dashboard.tsx    # Dashboard principal
│   ├── AnimalListPage.tsx # Lista de animales
│   ├── RegisterAnimalPage.tsx # Registro de animales
│   ├── MembershipPage.tsx # Planes de membresía
│   ├── AccountPage.tsx  # Gestión de cuenta
│   └── AdminVeterinariansPage.tsx # Admin de veterinarios
├── data/                # Datos de prueba
│   └── mockData.ts      # Datos simulados
├── types/               # Definiciones de TypeScript
│   └── index.ts         # Interfaces y tipos
└── styles.css           # Estilos con Tailwind CSS
```

## 🔄 Próximas Funcionalidades

- [ ] Integración con API backend real
- [ ] Base de datos para persistencia
- [ ] Sistema de notificaciones push
- [ ] Reportes PDF exportables
- [ ] Calendario de eventos veterinarios
- [ ] Integración con APIs de veterinarias
- [ ] Sistema de chat en tiempo real
- [ ] App móvil nativa

## 📞 Información de Contacto

- **Email**: contacto@registroganadero.com
- **Teléfono**: +1 (555) 123-4567
- **Dirección**: Av. Ganadera 123, Ciudad Agrícola, AG 12345

## 📄 Licencia

Este proyecto es de uso académico y demostración. Desarrollado con fines educativos.

---

**¿Tienes preguntas o sugerencias?** No dudes en contactarnos o abrir un issue en el repositorio.

🌟 ¡Gracias por usar Registro Ganadero! 🌟