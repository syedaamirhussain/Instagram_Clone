import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../HomeScreen';

const MusicRoute = () => <HomeScreen/>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const Dashboard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', focusedIcon: 'home', unfocusedIcon: 'home-outline', },
    { key: 'albums', focusedIcon: 'magnify-plus-outline',unfocusedIcon: 'magnify' },
    { key: 'recents', focusedIcon: 'plus-box',unfocusedIcon: 'plus-box-outline' },
    { key: 'notifications', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline' },
    { key: 'profile', focusedIcon: 'face-man-profile'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
    profile:ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled = {false}
      barStyle={{ backgroundColor: '#fff',height: 60 }}
    />
  );
};

export default Dashboard;