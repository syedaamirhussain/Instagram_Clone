import * as React from 'react';
import { Image,View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, IconButton } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';

const HomeHeader = () => {
    const _goBack = () => console.log('Went back');
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    const CameraIcon = () => {
        return (<Feather name="camera" size={22} color="black" />);
    }
    const TvIcon = () => {
        return (<Image source={require('../../../assets/Messanger.png')} style={{ width: 22, height: 22, resizeMode: 'contain', marginTop: 4 }} />);
    }
    const Messanger = () => {
        return (<MaterialCommunityIcons name="chat-processing-outline" size={22} color="black" />)
    }

    return (
        <>
        <View style={{backgroundColor: 'white' }}>
            <Appbar.Header mode='center-aligned' style={{ paddingHorizontal: 0, justifyContent: 'space-between', backgroundColor:"white" }}>
                <Appbar.Action icon={CameraIcon} onPress={_goBack} />
                {/* <Appbar.Action icon={LogoIcon} style={{ marginLeft: 50 }}/> */}
                <Image source={require('../../../assets/Logo.png')} style={{ width: 105, height: 30, resizeMode: 'contain'}} />
                <View style={{ flexDirection: 'row' }}>
                <IconButton
                    icon={() => <MaterialIcons name="live-tv" size={24} color="black" />}
                    onPress={() => console.log('message')}
                />
                    <IconButton 
                    style={{marginTop:8}}
                    icon={() => <Feather name="send" size={22} color="black" />}
                    onPress={() => console.log('send')}
                />
                </View>
            </Appbar.Header>
            <View style={{marginBottom:5  ,borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
        </View>
        </>
    );
};

export default HomeHeader;