import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = ({title,view}) => (
    <View style={styles.AsagiViewler2}>
    <Text style={styles.asagitext}>{title}</Text>
    <Text style={styles.ChooseThe}> {view} views </Text>
  </View>
);

export default Item;

const styles = StyleSheet.create({


    styleView1: {
        flex:3,
        marginTop: 20,
        fontSize: 80,
        marginHorizontal: 20,
        flexDirection: "row",
        gap: 130,
        justifyContent: "center",
      },
      upperText: {
        
        color: "#474747",
        fontWeight: "700",
        fontSize: 20,
      },
      SearcBttn: {
        color: "#474747",
        fontWeight: "700",
        fontSize: 15,
        textAlign: "center",
        // marginEnd: 50,
        paddingTop: 3,
      },
      LearnUmumi: {
        flex: 4,
        marginHorizontal: 30,
      },
      Learn: {
        fontSize: 36,
        fontWeight: 800,
      },
      ChooseThe: {
        fontSize: 18,
    
        fontWeight: 500,
        marginLeft: -4,
        color: "#474747",
      },
      AsagiUmumi: {
        flex:28,
        // backgroundColor: 'green'
      
      },
      AsagiViewler1:{
        marginHorizontal: 20,
        marginVertical:15,
        backgroundColor: '#EC7663',
        paddingVertical:20,
        paddingLeft: 20,
        borderRadius: 12,
        height:120
      },
      AsagiViewler2:{
        marginHorizontal: 20,
        marginVertical:15,
        backgroundColor:'#8CC4BA',
    
        paddingVertical:20,
        paddingLeft: 20,
        borderRadius: 12,
        height:120
      },
      AsagiViewler3:{
        marginHorizontal: 20,
        marginVertical:15,
        backgroundColor:'#F2982D',
        paddingVertical:20,
        paddingLeft: 20,
        borderRadius: 12,
        height:120
      },
      AsagiViewler4:{
        marginHorizontal: 20,
        marginVertical:15,
        backgroundColor:'#317388',
        paddingVertical:20,
        paddingLeft: 20,
        borderRadius: 12,
        height:120
      },
      asagitext:{
        color: 'white',
        fontSize: 32,
        fontWeight: 500,
    
      },
     
      
})
