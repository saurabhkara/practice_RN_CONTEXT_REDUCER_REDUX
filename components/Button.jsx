//import liraries
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../utility/colors';

// create a component
const Button = ({title='Submit', onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <Text style={{color:COLORS.white, fontSize:20, fontWeight:'500'}}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.blue,
        height:55,
        width:'100%',
        alignSelf:'center',
        marginVertical:10,
        
    },
});

//make this component available to the app
export default Button;
