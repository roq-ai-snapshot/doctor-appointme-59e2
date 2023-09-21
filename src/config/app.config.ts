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
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read appointment details',
    'Read insurance details',
    'Read healthcare provider information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage clinic data',
    'Manage appointment data',
    'Manage healthcare provider data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7fc00684-c981-4e20-be40-bb25198ddbb8',
};
