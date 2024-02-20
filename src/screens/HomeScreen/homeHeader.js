import * as React from 'react';
import { Image, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, IconButton } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { openCamera, pickCamera } from '../../utils/cameraOrImage';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../../redux/Slices/postsSlice';

const HomeHeader = (props) => {
    const dispatch = useDispatch();
    const openCameraMain = async () => {
        let cameraResponse = await openCamera();
        // console.log(cameraResponse, "cameraResponse herrrrrr")
        if (cameraResponse) dispatch(addNewPost(cameraResponse))
        props.setModalVisible(!props.modalVisible)
    }


    const CameraIcon = () => {
        return (<Feather name="camera" size={22} color="black" />);
    }
    const [postImg, setImage] = useState(null);
    // if(postImg)dispatch(addNewPost(postImg))

    return (
        <>
            <View style={{ backgroundColor: 'white' }}>
                <Appbar.Header mode='center-aligned' style={{ paddingHorizontal: 0, justifyContent: 'space-between', backgroundColor: "white" }}>
                    {/* <Appbar.Action icon={CameraIcon} onPress={()=>dispatch(pickCamera(setImage))} /> */}
                    <Appbar.Action icon={CameraIcon} onPress={openCameraMain} />

                    {/* <Appbar.Action icon={LogoIcon} style={{ marginLeft: 50 }}/> */}
                    <Image source={require('../../../assets/Logo.png')} style={{ width: 105, height: 30, resizeMode: 'contain' }} />
                    <View style={{ flexDirection: 'row' }}>
                        <IconButton
                            icon={() => <MaterialIcons name="live-tv" size={24} color="black" />}
                            onPress={() => console.log('message')}
                        />
                        <IconButton
                            style={{ marginTop: 8 }}
                            icon={() => <Feather name="send" size={22} color="black" />}
                            onPress={() => console.log('send')}
                        />
                    </View>
                </Appbar.Header>
                {/* <View style={{ marginBottom: 5, borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} /> */}
            </View>
        </>
    );
};

export default HomeHeader;
