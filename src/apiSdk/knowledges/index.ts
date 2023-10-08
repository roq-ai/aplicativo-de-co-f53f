import queryString from 'query-string';
import { KnowledgeInterface, KnowledgeGetQueryInterface } from 'interfaces/knowledge';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getKnowledges = async (
  query?: KnowledgeGetQueryInterface,
): Promise<PaginatedInterface<KnowledgeInterface>> => {
  return fetcher('/api/knowledges', {}, query);
};

export const createKnowledge = async (knowledge: KnowledgeInterface) => {
  return fetcher('/api/knowledges', { method: 'POST', body: JSON.stringify(knowledge) });
};

export const updateKnowledgeById = async (id: string, knowledge: KnowledgeInterface) => {
  return fetcher(`/api/knowledges/${id}`, { method: 'PUT', body: JSON.stringify(knowledge) });
};

export const getKnowledgeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/knowledges/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteKnowledgeById = async (id: string) => {
  return fetcher(`/api/knowledges/${id}`, { method: 'DELETE' });
};
