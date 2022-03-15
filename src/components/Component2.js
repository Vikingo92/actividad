import React, { Component } from 'react'
import styled from 'styled-components'
import H2Styled, { DivStyled } from '../styled/StyledComponent2'

export default class Component2  extends Component {
    render() {
        return (
            <DivStyled>
                <H2Styled>Experiencia</H2Styled>
                <p>
                    Aunque aun no cuento con experiencia en el sector TI, me apasiona mucho el area,
                    Cuanto con exprecias ajenas al sector pero estoy seguro que pueden ser de utilidad 
                    a la hora de desempeñan mis labores.
                </p>
            </DivStyled>
        )
    }
}
