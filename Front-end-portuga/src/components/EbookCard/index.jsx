import { EbookCardUIX } from "./styled";

function EbookCard({ photo, description, down, favorite }) {
    return (
        <EbookCardUIX>
            <img src={photo} alt={description} />
            <div>
                <button type="icon" className="bi bi-download">{down}</button>

                <button type="button" className="bi bi-heart-fill">{favorite}</button>
            </div>
        </EbookCardUIX>
    )
}

export default EbookCard;