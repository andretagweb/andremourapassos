import { graphqlRequest } from '../../../shared/api/graphqlClient';

/**
 * Obtém uma playlist específica pelo nome
 * @param {string} playlistName - Nome da playlist
 * @returns {Promise<Array>} - Lista de músicas
 */
export const fetchPlaylist = async (playlistName) => {
  if (!playlistName) {
    throw new Error('Nenhum nome de playlist fornecido.');
  }

  const query = `
    query GetPlaylist($playlistName: String) {
      playlist(playlistName: $playlistName) {
        title
        artist
        url
      }
    }
  `;

  const data = await graphqlRequest(query, { playlistName });
  return data?.playlist || [];
};
