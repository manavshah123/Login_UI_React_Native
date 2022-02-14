/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, Text, Image } from 'react-native';
 import images from './login.gif'
 import { TextInput, Button  } from 'react-native-paper';
 import loginicon from './signin.png';

  
 const App = () => {

  const [text, setText] = React.useState("");

   return (
     <SafeAreaView >
 
        <Text style={{color: 'black', fontSize: 30, textAlign: 'center',marginTop: 20}}>Login</Text>
        
        <Image source={images} style={{height:150, width: 150 , marginHorizontal: 110 , marginTop: 30}}></Image>
        
        <TextInput label="Name" value={text} onChangeText={text => setText()}
        style={{marginHorizontal: 20, marginTop: 30}}/>

        <TextInput label="Email" value={text} onChangeText={text => setText()}
        style={{marginHorizontal: 20, marginTop: 10}}/>

        <TextInput label="Password" value={text} onChangeText={text => setText()}
        style={{marginHorizontal: 20, marginTop: 10}}/>
        <Text style={{ marginTop: 15 ,textAlign:'right', marginRight: 22}}>Forgot Password</Text>


        <Button icon={loginicon} mode="contained" onPress={() => console.log('Pressed')} style={{ width: "90%", marginHorizontal: 20, marginTop: 30}} >
            Login
          </Button>
        <Text style={{ marginTop: 25 ,textAlign:'center'}}>Not have account? Signup</Text>

     </SafeAreaView>
   );
 };
 
 
 export default App;