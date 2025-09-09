import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.fb84dd1362b9434c9c1cdd1f8072938c',
  appName: 'Time Clock',
  webDir: 'dist',
  server: {
    url: 'https://fb84dd13-62b9-434c-9c1c-dd1f8072938c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: false
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#0f172a'
    }
  }
};

export default config;