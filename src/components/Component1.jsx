import React, { Component } from 'react'
import styled from 'styled-components';

const Styledcontainer = styled.div`

    justify-content: center;
    text-align: center;
    justify-content: center
    width: 20px;
    margin-top: 300px;
    
`

const Styleh1 = styled.h1`
    color: black;
    text-align: center;
    background-color: #b6fbff;
`

export default class Component1 extends Component {
    render() {
        return (
            <Styledcontainer>
                <Styleh1></Styleh1>
                <p>Soy una persona comprometida con lo que hago, siempre estoy en costante aprendizaje.
                    Actualmet estoy en un Bootcamp de desarrolo web para potenciar mis habilidades. cuento con habilidades
                    como atención al detalle, empatía. 
                </p>
                <p>Tengo conocimientos en: JavaScript, HTML5, CSS.</p>
            </Styledcontainer>
        )
    }
}


















