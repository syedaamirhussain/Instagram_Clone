import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, IconButton } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';
import BottomSheetComponent from '../../utils/bottomSheet';

const PostFotter = ({ postFooterData, postBy, description }) => {
    const [isLiked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const handleLikePress = () => {
        setLiked(!isLiked);
        console.log('heart');
    };
    // console.log(postBy,'poster')
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftIcons}>
                    <IconButton
                        icon={isLiked ? 'heart' : 'heart-outline'}
                        onPress={handleLikePress}
                    />
                    <Text style={styles.likesText}>2500</Text>
                    <View>
                        <BottomSheetComponent postGet={postFooterData} />
                    </View>

                    <IconButton
                        icon={() => <Feather name="send" size={24} color="black" />}
                        onPress={() => console.log('send')}
                    />
                </View>
                <View style={styles.rightIcons}>
                    <IconButton icon="bookmark-outline" onPress={() => console.log('bookmark')} />
                </View>

            </View>
            <View style={styles.description}>
                <Text style={styles.name}>{postBy?.name}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        </>

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
        // backgroundColor:'red',
        flexDirection: 'row',
        // gap: -5,
        alignItems: 'center',
        justifyContent: 'space-around',
        // minWidth: '70%',

    },
    description: {
        // backgroundColor:'red',
        flexDirection: "row",
        padding: 10,
        paddingLeft: 15,
        gap: 10
    },
    name: {
        fontWeight: 'bold',
    },
    desc: {
        fontWeight: '100'
    },
    likesText: {
        fontSize: 13
    }

})