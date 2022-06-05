import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tags from './Tags/Tags'
import Notes from './Notes/Notes'
import { height, width } from '../helpers/Dimmention'

const Home = () => {

    const [TaggedNotes, setTaggedNotes] = React.useState("")
    React.useEffect(async()=>{
        TaggedNotes === "" ? console.log("hi") : console.log("hello")
    },[])
    
    return (
        <View style={styles.Main}>
            <Text style={styles.NotesTitle}>Notes</Text>
            <Tags />
            <Notes />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Main:{
        backgroundColor:"#1C0C5B",
        height,
        width,
        alignItems:"center",
        justifyContent:"center"
    },
    NotesTitle:{
        width,
        height:height/8,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#110738',
        fontSize:height/20,
        color:"#1C0C5B",
        paddingTop:20,
        fontWeight:"500"
    }
})