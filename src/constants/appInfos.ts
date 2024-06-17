import {Dimensions} from 'react-native';

export const appInfo = {
  sizes: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  BASE_URL: 'http://192.168.1.203:3001',
  // BASE_URL: 'http://localhost:3001',
  domain: 'https://dashboard-mauve-xi.vercel.app/',
  GoogleApiKey: 'AIzaSyC28hJvcwjOn5X3EqRTD8bVZDFlq7AYNCs',
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
