import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    background: '#121517',
    surface: '#181818',
    cardBorder: '#282828',
    primary: '#1db954',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    danger: '#e91429',
    inputBg: '#1e2328',
    inputBorder: '#2a3137',
    searchBtn: '#318a58',
    tint: '#1db954',
    icon: '#9aa1a8',
    tabIconDefault: '#9aa1a8',
    tabIconSelected: '#1db954',
  },
  dark: {
    background: '#121517',
    surface: '#181818',
    cardBorder: '#282828',
    primary: '#1db954',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    danger: '#e91429',
    inputBg: '#1e2328',
    inputBorder: '#2a3137',
    searchBtn: '#318a58',
    tint: '#1db954',
    icon: '#9aa1a8',
    tabIconDefault: '#9aa1a8',
    tabIconSelected: '#1db954',
  },

};
export const Fonts = Platform.select({
  ios: {
   
    sans: 'system-ui',
    
    serif: 'ui-serif',
 
    rounded: 'ui-rounded',
  
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
