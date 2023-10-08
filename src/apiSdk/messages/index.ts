import queryString from 'query-string';
import { MessageInterface, MessageGetQueryInterface } from 'interfaces/message';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMessages = async (query?: MessageGetQueryInterface): Promise<PaginatedInterface<MessageInterface>> => {
  return fetcher('/api/messages', {}, query);
};

export const createMessage = async (message: MessageInterface) => {
  return fetcher('/api/messages', { method: 'POST', body: JSON.stringify(message) });
};

export const updateMessageById = async (id: string, message: MessageInterface) => {
  return fetcher(`/api/messages/${id}`, { method: 'PUT', body: JSON.stringify(message) });
};

export const getMessageById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/messages/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMessageById = async (id: string) => {
  return fetcher(`/api/messages/${id}`, { method: 'DELETE' });
};
