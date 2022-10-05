import { ButtonUIX } from "./styled";

function Button({ name }) {
    return (
        <ButtonUIX>
            <button type="button" className="btn">{name}</button>
        </ButtonUIX>

    );
}
export default Button;
