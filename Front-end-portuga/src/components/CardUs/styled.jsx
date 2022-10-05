import styled from "styled-components";

export const CardIUX = styled.div`
.container{
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 0.7rem;

    
}
.card{
    border: solid;
    background-color: #89df89;
}
.linha{
    width: 70%;
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
}

.container:hover{
        transform: scale(1.1);
        border-radius: 10px;
        cursor: pointer;
 }

`;