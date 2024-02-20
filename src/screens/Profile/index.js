import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import * as React from 'react';
import { Button } from 'react-native-paper';
import { logout } from '../../../redux/Services/firebaseActions';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const [loading, setLoading] = React.useState(false);
    const navigation = useNavigation();
    const handleLogout = () => {
        setLoading(true);
        logout(navigation)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                console.error('Logout error:', error);
                setLoading(false);
            });
    };
    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={handleLogout} loading={loading}>
                Logout User
            </Button>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'orange'
    }
})