import React from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Container, Wrapper } from './App.styles'

export default function App() {
    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={<div>
                        produtos disponiveis
                        </div>}
                    middle={<div>
                        lista de compras
                        </div>}
                    right={
                        <div>
                            estastisca
                        </div>
                    }
                />
            </Container>
        </Wrapper>
    )
}