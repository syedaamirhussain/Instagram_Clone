import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Image,
    FlatList,
    ScrollView,
    Text,
} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { openCamera } from '../utils/cameraOrImage';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost, removeContent } from '../../redux/Slices/postsSlice';
import { resetData } from '../../redux/Slices/postsSlice';
import Modal from "react-native-modal";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage,db } from '../../firebase/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore';

const CameraModal = ({ modalVisible, setModalVisible }) => {
    const content = useSelector(state => state.post?.data);

    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [stepUp, setstepUp] = useState(1);
    const [buttonLoading, setButtonLoading] = React.useState(false)
    const userId = useSelector(state => state.auth.currentUser?.userId);

    const sendPost = async () => {
        try {
            setButtonLoading(true)
            let contentUrls = [];
            for (const item of content) {
                const response = await uploadImage(item.uri);
                contentUrls.push(response);
                await Promise.all(contentUrls);
            }
            // console.log(contentUrls, "contentUrls");
            const postData = {
                description: description,
                location: location,
                content: contentUrls,
                likes: 0,
                comments: [],
                userId,
                createdAt: new Date().getTime(),
            }
           await addDoc(collection(db,'posts'), postData);
           setModalVisible(false);
           setButtonLoading(false)
           dispatch(resetData());
           setDescription('');
           setLocation('');
           console.log('Post Send to Firebase');

        } catch (error) {
            console.log(error, "error in sendPost");
        }
        finally {

        }
    };

    async function uploadImage(uri) {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = ref(storage, `images/${nanoid()}.jpg`);
            await uploadBytes(storageRef, blob);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error; 
        }
    }

    const cameraOpened = async () => {
        const respContent = await openCamera();
        if (respContent) dispatch(addNewPost(respContent));
    };

    const handleNextstepUp = () => {
        setstepUp(stepUp + 1);
    };

    const handleNextstepDown = () => {
        setstepUp(stepUp - 1);
    };
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                isVisible={modalVisible}
                onRequestClose={() => {
                    dispatch(resetData())
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                {stepUp === 1 && (
                    <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: "center", backgroundColor: 'white', paddingVertical: 10 }}>
                        <Text>Post Your Status</Text>
                        <View style={{ maxHeight: 300 }}>
                            <ScrollView>
                                <View style={styles.modalTopView}>
                                    {content &&
                                        content.map((item, index) => (
                                            <View key={index}>
                                                <Image
                                                    source={{ uri: item.uri }}
                                                    style={styles.imagesContainer}
                                                />
                                                <IconButton icon="close-circle" style={styles.closeBtn} onPress={() => dispatch(removeContent(index))} />
                                            </View>
                                        ))}
                                    <View>
                                        <IconButton
                                            icon='plus'
                                            mode='contained-tonal'
                                            style={styles.addPhotosBtn}
                                            onPress={cameraOpened}
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                        <View>
                            <Button mode='elevated' onPress={handleNextstepUp}> Next </Button>
                        </View>
                    </View>

                )}
                {stepUp === 2 && (
                    <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
                        <View style={styles.modalViewBottom}>
                            <TextInput
                                label='Description'
                                value={description}
                                onChangeText={(value) => setDescription(value)}
                                mode='outlined'
                                placeholder='Add some description'
                                width={333}
                                outlineStyle={{
                                    borderWidth: 0.5,
                                    borderColor: '#0000001a',
                                }}
                                activeOutlineColor='#333' />
                            <TextInput
                                label='Location'
                                value={location}
                                onChangeText={(value) => setLocation(value)}
                                placeholder='Optional'
                                mode='outlined'
                                width={150}
                                style={{ marginTop: 10 }}
                                outlineStyle={{
                                    borderWidth: 0.5,
                                    borderColor: '#0000001a',
                                }}
                                activeOutlineColor='#333' />
                        </View>
                        <View style={{ position: 'absolute', flexDirection: 'row', top: 0, marginTop: 100, gap: 135 }}>
                            <View>
                                <Button mode='elevated' onPress={handleNextstepDown}>Back</Button>
                            </View>
                            <View>
                                <Button
                                    icon='send'
                                    onPress={sendPost}
                                    mode='elevated'
                                    style={styles.postButton}
                                    loading={buttonLoading ? true : false}
                                >
                                    Send Post
                                </Button>
                            </View>
                        </View>
                    </View>
                )}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalTopView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesContainer: {
        width: 100,
        height: 100,
        gap: 10,
        borderRadius: 10,
    },
    addPhotosBtn: {
        width: 100,
        height: 100,
    },
    modalViewBottom: {
        maxHeight: 300,
        position: 'absolute',
        backgroundColor: 'white',
        elevation: 1,
        padding: 10,
    },
    closeBtn: {
        position: 'absolute',
        top: -20,
        right: -20,
    }
});

export default CameraModal;
