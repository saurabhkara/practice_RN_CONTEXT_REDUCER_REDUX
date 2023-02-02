import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useContext}from 'react';
import { ContextW } from '../context/ContextWrapper';

export default function Board() {
    const [state, dispatch] = useContext(ContextW);
    console.group(state.data);
  return (
    <View>
      <Text>Board</Text>

        <TouchableOpacity style={{backgroundColor:'cyan'}} onPress={()=>dispatch({type:'add'})}>
            <Text>Press</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'cyan', marginTop:10}} onPress={()=>dispatch({type:'minus'})}>
            <Text>Press</Text>
        </TouchableOpacity>
    </View>
  )
}