 
import React from 'react';
 
import {
  Text, 
  View,
} from 'react-native';
import Login from './component/home';

 

const App  = () => {


  const data  = 12
    return (
     <View>

       <Login data={data}/>
 

       <Text>

         hellow

       </Text>
     </View>
  );
};

 

export default App;
