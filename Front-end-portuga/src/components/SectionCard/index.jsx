import { Link } from "react-router-dom";
import Button from "../Button";
import { CardStyled } from "./styled";

export default function SectionCard({ title, subtitle, photo }) {
    return (
        <CardStyled>
            <h3>{title}</h3>
            <img src={photo} />
            <p>{subtitle}</p>

        </CardStyled>

    )
}

