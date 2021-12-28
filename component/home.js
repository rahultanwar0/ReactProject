 import React from "react"
import{
    View,
    Text
}from 'react-native'

const Login=(props)=>{

    return(
        <View>
            <Text>
                {props.data}
            </Text>
        </View>
    )
}

export default Login;