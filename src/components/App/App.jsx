import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Container, Wrapper } from './App.styles'

export default function App() {
    const [lettuce, setLettuce] = useState();

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={<div>
                        produtos disponiveis

                        <Checkbox
                            value={lettuce}
                            title="Alface"
                            onClick={() => setLettuce(!lettuce)}
                        />
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