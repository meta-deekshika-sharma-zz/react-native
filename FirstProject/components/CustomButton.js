import React, { Component} from 'react';
import { Button } from 'react-native';

const CustomButton = (props) => {
    return (
        <Button title="Add Product"
        onPress={() => {props.onPress()}}/>
    )
}

export default CustomButton;