import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'

import { Container, InputArea, Button, Title, ButtonText, Text } from './styles';
import Input from '../components/Input';

import Churrasco from '../../assets/churrasco.svg'

export default function Home() {

    const [men, setMen] = useState(0);
    const [women, setWomen] = useState(0);
    const [child, setChild] = useState(0);
    const [message, setMessage] = useState("");
    const [messageCharcoal, setMessageCharcoal] = useState("");

    function handleCalculateMeatBBQ() {
        const meatMen = 0.400
        const meatWomen = 0.300
        const meatChild = 0.200

        const CalculateMen = (men * meatMen)
        const CalculateWomen = (women * meatWomen)
        const CalculateChild = (child * meatChild)

        const CalculateAll = (CalculateMen + CalculateWomen + CalculateChild)
        const Charcoal = (CalculateAll / 5)

        if (CalculateAll > 0 && Charcoal > 1) {
            setMessage("Total de kg de carne a ser comprado:" + (CalculateAll.toFixed(3)) + "kg, Total para Homens: " + (CalculateMen.toFixed(3)) + "kg, Total para Mulheres: " +
            (CalculateWomen.toFixed(3)) + ("kg, Total para crianças: ") + (CalculateChild.toFixed(3) + "kg"))    
            setMessageCharcoal("Será preciso " + Math.round(Charcoal) + " sacos de 5kg de carvão para assar " + (CalculateAll.toFixed(2)) + "kg de carne")
        
        } else if (CalculateAll > 0 && Charcoal < 1) {
            const Charcoal = 1

            setMessage("Total de kg de carne a ser comprado:" + (CalculateAll.toFixed(3)) + "kg, Total para Homens: " + (CalculateMen.toFixed(3)) + "kg, Total para Mulheres: " +
            (CalculateWomen.toFixed(3)) + ("kg, Total para crianças: ") + (CalculateChild.toFixed(3)) + "kg")
            setMessageCharcoal("Será preciso " + (Charcoal) + " saco de 5kg de carvão para assar " + (CalculateAll.toFixed(3)) + "kg de carne")
        }
        else {
            alert("Insira a quantidade correta de pessoas")
        }
    }
    
  return (
    <Container>
        
        <Churrasco width="100%" height="160px"/>

        <Title>Churras dos Cria</Title>

        <InputArea>
            <Input 
                placeholder="Digite a quantidade de Homens"
                onChangeText={setMen}
                keyboardType='numeric'
            />
            <Input 
                placeholder="Digite a quantidade de Mulheres"
                onChangeText={setWomen}
                keyboardType='numeric'
            />
            <Input 
                placeholder="Digite a quantidade de Crianças"
                onChangeText={setChild}
                keyboardType='numeric'
            />

            <Button onPress={handleCalculateMeatBBQ}>
                <ButtonText>Calcular</ButtonText>
            </Button>

            <Text>{message}</Text>

            <Text>{messageCharcoal}</Text>

        </InputArea>
    </Container>
  );
}

