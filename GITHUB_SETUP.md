# Configuración de Integración con GitHub

## Descripción
Esta integración permite mostrar dinámicamente tu perfil de GitHub y repositorios en tu portfolio personal.

## Características
- ✅ Perfil de GitHub con avatar, bio y estadísticas
- ✅ Lista de repositorios más recientes
- ✅ Diseño consistente con el resto del portfolio
- ✅ Actualización automática desde la API de GitHub
- ✅ Responsive y con efectos hover
- ✅ Configuración centralizada

## Configuración

### 1. Cambiar Username de GitHub
Edita el archivo `src/config/github.js`:

```javascript
export const GITHUB_CONFIG = {
  // Cambia este valor por tu username de GitHub
  USERNAME: 'TU_USERNAME_AQUI',
  
  // Número máximo de repositorios a mostrar
  MAX_REPOS: 6,
  
  // Orden de los repositorios (updated, created, pushed, full_name)
  SORT_REPOS: 'updated',
  
  // Tipo de repositorios (all, owner, member)
  TYPE_REPOS: 'owner'
};
```

### 2. Personalizar Número de Repositorios
Puedes cambiar cuántos repositorios se muestran modificando `MAX_REPOS` en la configuración.

### 3. Cambiar Orden de Repositorios
Opciones disponibles:
- `updated`: Más recientemente actualizados (por defecto)
- `created`: Más recientemente creados
- `pushed`: Más recientemente pusheados
- `full_name`: Orden alfabético

## Límites de la API
- **Sin autenticación**: 60 requests por hora
- **Con autenticación**: 5000 requests por hora

Para uso personal, 60 requests/hora es suficiente.

## Personalización Adicional

### Cambiar Colores
Los colores se pueden personalizar en `src/index.css` modificando las variables CSS de Tailwind.

### Cambiar Iconos
Los iconos se pueden cambiar importando diferentes iconos de `react-icons/fi`.

### Agregar Más Información
Puedes extender los componentes para mostrar:
- Contribuciones del último año
- Lenguajes más usados
- Repositorios destacados
- Actividad reciente

## Estructura de Archivos
```
src/
├── components/
│   ├── GitHubProfile.jsx      # Perfil de GitHub
│   ├── GitHubRepos.jsx        # Lista de repositorios
│   └── SeccionGitHub.jsx      # Contenedor principal
├── config/
│   └── github.js              # Configuración centralizada
└── views/
    └── Inicio.jsx             # Vista principal (ya actualizada)
```

## Solución de Problemas

### Error de Rate Limit
Si ves errores de rate limit, espera una hora o implementa autenticación con token personal.

### Repositorios No Aparecen
- Verifica que el username sea correcto
- Asegúrate de que tengas repositorios públicos
- Revisa la consola del navegador para errores

### Problemas de CORS
La API de GitHub no tiene problemas de CORS, pero si los tienes, verifica tu configuración de red.

## Ejemplo de Uso
```jsx
import SeccionGitHub from './components/SeccionGitHub';

// En tu componente principal
<SeccionGitHub username="tu-username" />

// O usar el valor por defecto de la configuración
<SeccionGitHub />
```

## Notas
- Los datos se actualizan automáticamente cada vez que se carga la página
- El diseño es completamente responsive
- Se integra perfectamente con el sistema de navegación existente
- Incluye estados de carga y manejo de errores
