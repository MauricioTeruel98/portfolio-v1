import React, { useState, useEffect } from 'react';
import { FiGithub, FiMapPin, FiLink, FiUsers, FiStar, FiGitBranch } from 'react-icons/fi';
import { GITHUB_API } from '../config/github';

const GitHubProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(GITHUB_API.USER_PROFILE);
        if (!response.ok) {
          throw new Error('Error al obtener perfil de GitHub');
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-lg mb-4">
          <FiGithub className="w-8 h-8 mx-auto mb-2" />
          Error al cargar perfil de GitHub
        </div>
        <p className="text-gray-400">{error || 'No se pudo cargar el perfil'}</p>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 hover:border-accent-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/25">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-transparent"></div>
      </div>

      <div className="relative p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 mb-8">
          {/* Avatar */}
          <div className="relative">
            <img
              src={profile.avatar_url}
              alt={`${profile.name || profile.login} avatar`}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl border-2 border-dark-600/50 group-hover:border-accent-500/50 transition-all duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent-600 rounded-full p-2">
              <FiGithub className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {profile.name || profile.login}
              </h3>
              <p className="text-accent-400 text-lg font-medium">
                @{profile.login}
              </p>
            </div>
            
            {profile.bio && (
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
            )}

            {/* Location and Blog */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {profile.location && (
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.blog && (
                <a
                  href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-accent-400 transition-colors duration-300"
                >
                  <FiLink className="w-4 h-4" />
                  <span>{profile.blog}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center group/stat">
            <div className="text-3xl font-bold text-accent-400 group-hover/stat:text-accent-300 transition-colors duration-300">
              {profile.public_repos}
            </div>
            <div className="text-gray-400 text-sm font-medium">Repositorios</div>
            <div className="mt-2 w-8 h-1 bg-accent-600/50 rounded-full mx-auto group-hover/stat:bg-accent-500 transition-all duration-300"></div>
          </div>
          
          <div className="text-center group/stat">
            <div className="text-3xl font-bold text-green-400 group-hover/stat:text-green-300 transition-colors duration-300">
              {profile.followers}
            </div>
            <div className="text-gray-400 text-sm font-medium">Seguidores</div>
            <div className="mt-2 w-8 h-1 bg-green-600/50 rounded-full mx-auto group-hover/stat:bg-green-500 transition-all duration-300"></div>
          </div>
          
          <div className="text-center group/stat">
            <div className="text-3xl font-bold text-purple-400 group-hover/stat:text-purple-300 transition-colors duration-300">
              {profile.following}
            </div>
            <div className="text-gray-400 text-sm font-medium">Siguiendo</div>
            <div className="mt-2 w-8 h-1 bg-purple-600/50 rounded-full mx-auto group-hover/stat:bg-purple-500 transition-all duration-300"></div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-8 text-center">
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-dark-800/50 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-600/25 border border-dark-600/50 hover:border-accent-500/50"
          >
            <FiGithub className="w-5 h-5" />
            <span>Ver Perfil en GitHub</span>
          </a>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-500/30 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default GitHubProfile;
