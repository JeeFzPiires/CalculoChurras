import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #740001;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const Button = styled.TouchableOpacity`
    height: 60px;
    background-color: #d3a625;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #000000;
`;


export const Title = styled.Text`
    font-size: 30px;
    margin-top: 40px;
    color: #000000;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: 20px;
    color: #000000;
    margin-top: 10px;
    font-weight: bold;
`;

