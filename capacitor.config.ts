import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'srmis.app',
  appName: 'srmis-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
