import { Indicator, Wrapper } from "./Checkbox.styles";

export default function Checkbox({ value, title, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            <Indicator value={value} />
            {title}
        </Wrapper>
    )
}