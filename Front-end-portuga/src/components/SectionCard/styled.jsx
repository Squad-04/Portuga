import styled from "styled-components";

export const CardStyled = styled.div`


        border-radius: 10px;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15rem;
        height: 14rem;
        padding: 50px;
        padding-bottom: 6rem;
        border: solid ;
        background-color: rgb(178, 238, 153);
        margin: 30px;
        margin-left: 10rem;
        text-align: center;
        
        h4{
            margin-top: 4rem;
           padding: 2rem;
        }

        p{
            margin: auto;
        }

    img{
                width: 8rem;
                margin: 5rem;
                height: auto;
                border-radius: 5px;
            }
        
           :hover{
            cursor: pointer;
            box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
           }
        `;
