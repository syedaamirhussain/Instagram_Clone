import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './card'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/Services/firebaseActions'

const CardBar = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth?.currentUser)
  

  React.useEffect(() => {
    dispatch(getUsers(currentUser.userId))
  },[])



const randomUsers=useSelector(state=>state.users.allUsers)
  return (

    <View>
      <ScrollView contentContainerStyle={styles.container} horizontal={true}>
          <Card  url={currentUser?.proImgLink}  name={currentUser.name} size={70}/>
        {randomUsers.map((item) => (
          <Card key={item.id} url={item?.proImgLink}  name={item.name} size={65} />
        ))}
      </ScrollView>
      <View style={{ marginTop: 5, borderBottomWidth: 1, borderColor: "#0000001a", flex: 1, }} />
    </View>
  )
}

export default CardBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 98,
    alignItems: 'center',
    gap: 10
  },


})

