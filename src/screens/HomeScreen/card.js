import * as React from 'react';
import { Touchable, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

const Card = ({ url, name }) => (
  <View style={{ alignItems: 'center' }}>
    <TouchableOpacity style={{ borderWidth: 2, borderColor: '#ee2a7b', borderRadius: 50, padding: 2 }} >
      <Avatar.Image size={65} source={{ uri: url }} />
    </TouchableOpacity>
    <Text>{name}</Text>
  </View>
);
export default Card
