import queryString from 'query-string';
import { ItemInterface, ItemGetQueryInterface } from 'interfaces/item';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getItems = async (query?: ItemGetQueryInterface): Promise<PaginatedInterface<ItemInterface>> => {
  return fetcher('/api/items', {}, query);
};

export const createItem = async (item: ItemInterface) => {
  return fetcher('/api/items', { method: 'POST', body: JSON.stringify(item) });
};

export const updateItemById = async (id: string, item: ItemInterface) => {
  return fetcher(`/api/items/${id}`, { method: 'PUT', body: JSON.stringify(item) });
};

export const getItemById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/items/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteItemById = async (id: string) => {
  return fetcher(`/api/items/${id}`, { method: 'DELETE' });
};
