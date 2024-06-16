import MainNavigator from './navigators/MainNavigator';
import {EventDetail} from './screens';

const config = {
  screens: {
    NotFound: '*',
    EventDetail: {
      path: 'detail/:id',
    },
  },
};

const linking: any = {
  prefixes: ['eventhub://app', 'https://abc.xyz'],
  config,
};

export default linking;
