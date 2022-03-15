import React, { Component } from 'react'

import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import styled from 'styled-components';

const DivStyle = styled.div`
    background-color: #abbaab;
    text-align: center;
    font-family: tahoma;
    padding: 0;
    magin:0;
    box-sizing: border-box;

    width: 100vw;
    height: 100vh;
    margin: 20px 0px;

`

export default class Container extends Component {
    render() {
        return (
            <DivStyle>
                <h1>Jimmy Linares</h1>
                <img src=""></img>
                <Component1/>
                <Component2/>
                <h2>Contacto</h2>
                <u>
                    <li>
                        <a href="https://github.com/Vikingo92">GitHub</a>
                    </li>
                    <li>
                        <a>Email: jimmy@outlook.com</a>
                    </li>
                </u>
            </DivStyle>
        )
    }
}