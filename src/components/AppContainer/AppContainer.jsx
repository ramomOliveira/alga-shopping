import { Wrapper } from "./AppContainer.styles"

export default function AppContainer({ left, middle, right }) {
    return (
        <Wrapper>
            <div>{left}</div>
            <div>{middle}</div>

            <div>{right}</div>
        </Wrapper>
    )
}

