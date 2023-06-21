const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  restaurants: 'restaurant',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
