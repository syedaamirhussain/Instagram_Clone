import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, IconButton } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';

const PostFotter = ({postFooterData}) => {
    const [isLiked, setLiked] = useState(false);
    const handleLikePress = () => {
        setLiked(!isLiked);
        console.log('heart');
    };
    return (
        <View style={styles.container}>
            <View style={styles.leftIcons}>
                <IconButton
                    icon={isLiked ? 'heart' : 'heart-outline'}
                    onPress={handleLikePress}
                />
                <IconButton
                    icon={() => <Feather name="message-circle" size={24} color="black" />}
                    onPress={() => console.log('message')}
                />
                <IconButton
                    icon={() => <Feather name="send" size={24} color="black" />}
                    onPress={() => console.log('send')}
                />
            </View>
            <View style={styles.rightIcons}>
                <IconButton icon="bookmark-outline" onPress={() => console.log('bookmark')} />
            </View>
        </View>
    )
}

export default PostFotter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // minHeight: 139,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftIcons: {
        flexDirection: 'row',
        gap: -5
    }

})