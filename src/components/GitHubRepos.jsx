import React, { useState, useEffect } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiEye, FiCalendar, FiCode } from 'react-icons/fi';
import { GITHUB_API } from '../config/github';

const GitHubRepos = ({ username, maxRepos = 6 }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API.USER_REPOS);
        
        if (!response.ok) {
          throw new Error('Error al obtener repositorios de GitHub');
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, maxRepos]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-lg mb-4">
          <FiGithub className="w-8 h-8 mx-auto mb-2" />
          Error al cargar repositorios
        </div>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">
          <FiGithub className="w-8 h-8 mx-auto mb-2" />
          No se encontraron repositorios
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {repos.map((repo) => (
        <div key={repo.id} className="group relative overflow-hidden rounded-2xl bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/25">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-transparent"></div>
          </div>

          <div className="relative p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300 truncate">
                  {repo.name}
                </h3>
                {repo.language && (
                  <span className="inline-flex items-center px-3 py-1 bg-dark-800/50 text-accent-400 text-xs rounded-full border border-dark-600/50">
                    <FiCode className="w-3 h-3 mr-1" />
                    {repo.language}
                  </span>
                )}
              </div>
              
              {/* Fork Badge */}
              {repo.fork && (
                <div className="ml-2 flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-600/30">
                    <FiGitBranch className="w-3 h-3 mr-1" />
                    Fork
                  </span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
              {repo.description || 'Sin descripción disponible'}
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center hover:text-accent-400 transition-colors duration-300">
                  <FiStar className="w-4 h-4 mr-1" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center hover:text-green-400 transition-colors duration-300">
                  <FiGitBranch className="w-4 h-4 mr-1" />
                  {repo.forks_count}
                </span>
                {repo.watchers_count > 0 && (
                  <span className="flex items-center hover:text-blue-400 transition-colors duration-300">
                    <FiEye className="w-4 h-4 mr-1" />
                    {repo.watchers_count}
                  </span>
                )}
              </div>
            </div>

            {/* Updated Date */}
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <FiCalendar className="w-3 h-3 mr-1" />
              <span>
                Actualizado {new Date(repo.updated_at).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            {/* Action Button */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-dark-800/50 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-600/25 border border-dark-600/50 hover:border-accent-500/50"
            >
              <FiGithub className="w-4 h-4 mr-2" />
              Ver en GitHub
            </a>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-500/30 transition-all duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
