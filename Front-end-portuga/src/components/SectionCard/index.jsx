import Button from "../Button";
import { CardStyled } from "./styled";

export default function SectionCard({title,subtitle,className}){
    return(
<CardStyled className={className}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Button name="Ver" />
</CardStyled>

    )
}

