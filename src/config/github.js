// Configuración de GitHub
export const GITHUB_CONFIG = {
  // Cambia este valor por tu username de GitHub
  USERNAME: 'mauricioteruel98',
  
  // Número máximo de repositorios a mostrar
  MAX_REPOS: 6,
  
  // Orden de los repositorios (updated, created, pushed, full_name)
  SORT_REPOS: 'updated',
  
  // Tipo de repositorios (all, owner, member)
  TYPE_REPOS: 'owner'
};

// URLs de la API de GitHub
export const GITHUB_API = {
  USER_PROFILE: `https://api.github.com/users/${GITHUB_CONFIG.USERNAME}`,
  USER_REPOS: `https://api.github.com/users/${GITHUB_CONFIG.USERNAME}/repos?sort=${GITHUB_CONFIG.SORT_REPOS}&per_page=${GITHUB_CONFIG.MAX_REPOS}&type=${GITHUB_CONFIG.TYPE_REPOS}`
};
