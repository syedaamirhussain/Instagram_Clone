import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

const Card = ({ url, name,size,onPress }) => (
  <View style={{ alignItems: 'center', paddingHorizontal: 2}} >
    <TouchableOpacity style={{ borderWidth: 2, borderColor: '#ee2a7b', borderRadius: 50, padding: 3}} onPress={onPress}>
      <Avatar.Image size={size} source={{ uri: url }} />
    </TouchableOpacity>
    <Text>{name}</Text>
  </View>
);
export default Card
