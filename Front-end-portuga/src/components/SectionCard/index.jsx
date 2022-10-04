import Button from "../Button";
import { CardStyled } from "./styled";

export default function SectionCard({title,subtitle}){
    return(
<CardStyled>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Button name="ver" />
</CardStyled>

    )
}

