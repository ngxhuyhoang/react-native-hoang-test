import React from 'react';
import { View } from 'react-native';

interface ISpacerProps {
    width?: number;
    height?: number;
}

const Spacer = ({ width, height }:ISpacerProps) => {
    return <View style={{ width, height }} />
}

export default Spacer;
