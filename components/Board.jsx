import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useContext}from 'react';
// import { ContextW } from '../context/ContextWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByUnits } from '../redux/reducer';

export default function Board() {
    // const [state, dispatch] = useContext(ContextW);
    // console.group(state.data);
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    console.log(state);
  return (
    <View>
      <Text>Board</Text>

        <TouchableOpacity style={{backgroundColor:'cyan'}} onPress={()=>dispatch(incrementByUnits(5))}>
            <Text>Press</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'cyan', marginTop:10}} onPress={()=>dispatch({type:'minus'})}>
            <Text>Press</Text>
        </TouchableOpacity>
    </View>
  )
}