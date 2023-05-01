import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";

import Item from "./components/İtem";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () =>{
///// TS ilə yazmaq tələb olunmadığı üçün əvvəlki dizaynı götürüb xırda bir dəyişikliklə useEffect və search əlavə etmişəm
  
  const [DATA,setdata] = useState([])
  const [datainmutable,setdatainmutable] = useState([]) // it is mutable, but variable name is good
  const [searchText, SetSearchText] = useState("")
  useEffect(() => {

    const url = "https://643fb836b9e6d064befc8b51.mockapi.io/mahabbatsapi/tasks0205"

    fetch(url)
    .then((res) => res.json())
    .then((data1) => {
       setdata(data1)
      setdatainmutable(data1)
        });
      
  }, [])
  function handlesearch(value){
    let newarr  = datainmutable.filter(q => q.name.toLowerCase().includes(value.toLowerCase()));
    setdata([...newarr])
  }
  return (
    <View style={{ flex: 1 }}>
      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>

      <View style={styles.styleView1}>
      <TextInput
        style={styles.input}
        onChangeText={handlesearch}
        placeholder={new Date().toLocaleDateString("de-DE")}
      />
      </View>

      <View style={styles.LearnUmumi}>
        <Text style={styles.Learn}>Musics</Text>
        <Text style={styles.ChooseThe}> Choose music to listen </Text>
      </View>

      <View style={styles.AsagiUmumi}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.name} view={item['watch']} />}
          keyExtractor={(item) => item.id}
          renderToHardwareTextureAndroid={true}
        />
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  styleView1: {
 flex: 3,
 width: '90%',
 marginLeft: '5%',
 marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
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
    flex: 28,
    // backgroundColor: 'green'
  },
  AsagiViewler1: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "#EC7663",
    paddingVertical: 20,
    paddingLeft: 20,
    borderRadius: 12,
    height: 120,
  },
  AsagiViewler2: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "#8CC4BA",

    paddingVertical: 20,
    paddingLeft: 20,
    borderRadius: 12,
    height: 120,
  },
  AsagiViewler3: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "#F2982D",
    paddingVertical: 20,
    paddingLeft: 20,
    borderRadius: 12,
    height: 120,
  },
  AsagiViewler4: {
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: "#317388",
    paddingVertical: 20,
    paddingLeft: 20,
    borderRadius: 12,
    height: 120,
  },
  asagitext: {
    color: "white",
    fontSize: 32,
    fontWeight: 500,
  },
});

// const styles = StyleSheet.create({
//   styleView1: {
//     flex: 1,
//     backgroundColor: "tomato",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 32,
//   },
//   styleText1: {
//     color: "black",
//     fontSize: 24,
//     fontWeight: "800"
//   },
//   styleView2: {
//     flex: 2, backgroundColor: "pink"
//   }

// })

//flex 2 - 1 50%
// View - div
//Text - p,span
//Button - button
// Flexbox - margin,padding, flex
