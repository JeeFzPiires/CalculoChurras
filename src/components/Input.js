import React from 'react';
import styled from 'styled-components/native'


const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: rgba(238,186,48,0.8);
    flex-direction: row;
    border-radius: 30px;
    border-color: #000000;
    border-style: solid;
    border-width: 1px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
    margin-left: 10px;
`;

export default ({placeholder, onChangeText, keyboardType}) => {
    return(
        <InputArea>
            <Input 
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </InputArea>

    );
}