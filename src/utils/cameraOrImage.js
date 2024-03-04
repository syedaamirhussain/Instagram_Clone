import * as ImagePicker from 'expo-image-picker';


export const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 0.8,

    });
    if (result.canceled) {
        return;
    }
    return result.assets[0];
};

export const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      return(result.assets[0]);
    }
  };




//export const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: false,
//         aspect: [4, 3],
//         quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//         setImage(result.assets[0].uri);
//     }
// };

// For accessing camera

// export const pickCamera =(setImage) => async (dispatch) => {
    
//     let cameraPermissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (cameraPermissionResult.granted) {
//         let result = await ImagePicker.launchCameraAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: false,
//             aspect: [4, 3],
//             quality: 1,
//         });
//         // console.log(result);

//         if (!result?.canceled) {
//             setImage(result.assets[0].uri);
            
//         }
//     } else {
//         // Handle the case where camera permission is not granted
//         console.log('Camera permission not granted');
//     }
// };