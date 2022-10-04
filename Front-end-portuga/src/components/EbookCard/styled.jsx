import styled from "styled-components";

export const EbookCardUIX = styled.div`
        border: solid 1px ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 25rem;
        margin-left: 2rem;
        border-radius: 10px;
        background-color: #f3ebeb;

    button{
        margin: 10px;
        padding: 4px;
        border: none;
        border-radius: 4px;
        background-color: #f3ebeb;
        color: black;
    }

    img {
        border-radius: 5px;
        width: 13rem;
    }

    .bi-download::before{
        margin-right: 5px;
        
    }
    .bi-heart-fill::before{
        margin-right: 5px;
        ::shadow{
            
        }
    }

     .bi-heart-fill:hover{
        color: red;
        font-weight: bolder;
        
    }

    .bi-download:hover{
        color: #135313;
        font-weight: bolder;
        
    }
    img:hover {
    transform: scale(1.1);
    filter: brightness(.8);
    border-radius: 10px;
    box-shadow: 5px 4px 5px ;
    cursor: pointer;
}
`;