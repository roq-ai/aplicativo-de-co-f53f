interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Viewer'],
  customerRoles: [],
  tenantRoles: ['Contributor', 'Viewer', 'End User'],
  tenantName: 'Organization',
  applicationName: 'Aplicativo de compartilhamento de pessoal',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Read user information', 'Read organization details', 'View items', 'Access knowledge base'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a8b787b8-6336-42d5-860a-264157949f8b',
};
