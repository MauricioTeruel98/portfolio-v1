import React from 'react';
import GitHubProfile from './GitHubProfile';
import GitHubRepos from './GitHubRepos';
import { GITHUB_CONFIG } from '../config/github';

const SeccionGitHub = ({ username = GITHUB_CONFIG.USERNAME }) => {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="section-title">
          <span className="gradient-text">GitHub</span>
        </h2>
        <p className="section-subtitle">
          Mi actividad en GitHub
        </p>
      </div>

      {/* GitHub Profile */}
      <div className="mb-16">
        <GitHubProfile username={username} />
      </div>

      {/* GitHub Repositories */}
      {/* <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Repositorios Destacados
          </h3>
          <p className="text-gray-400">
            Los repositorios más recientes y activos de mi cuenta de GitHub
          </p>
        </div>
        <GitHubRepos username={username} maxRepos={6} />
      </div> */}
    </div>
  );
};

export default SeccionGitHub;
