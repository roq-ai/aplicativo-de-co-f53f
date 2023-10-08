import queryString from 'query-string';
import { ConnectionInterface, ConnectionGetQueryInterface } from 'interfaces/connection';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConnections = async (
  query?: ConnectionGetQueryInterface,
): Promise<PaginatedInterface<ConnectionInterface>> => {
  return fetcher('/api/connections', {}, query);
};

export const createConnection = async (connection: ConnectionInterface) => {
  return fetcher('/api/connections', { method: 'POST', body: JSON.stringify(connection) });
};

export const updateConnectionById = async (id: string, connection: ConnectionInterface) => {
  return fetcher(`/api/connections/${id}`, { method: 'PUT', body: JSON.stringify(connection) });
};

export const getConnectionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/connections/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteConnectionById = async (id: string) => {
  return fetcher(`/api/connections/${id}`, { method: 'DELETE' });
};
