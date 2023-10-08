const mapping: Record<string, string> = {
  connections: 'connection',
  items: 'item',
  knowledges: 'knowledge',
  messages: 'message',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
