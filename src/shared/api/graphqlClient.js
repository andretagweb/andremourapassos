const GRAPHQL_ENDPOINT =  'http://localhost:3001/graphql';

/**
 * Executa uma consulta GraphQL genérica
 * @param {string} query - A consulta GraphQL
 * @param {Object} variables - As variáveis da consulta
 * @returns {Promise<any>} - O resultado da consulta
 */
export const graphqlRequest = async (query, variables = {}) => {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error('Erro na resposta GraphQL:', result.errors);
      throw new Error('Erro na requisição GraphQL');
    }

    return result.data;
  } catch (error) {
    console.error('Erro ao fazer requisição GraphQL:', error);
    throw error;
  }
};
