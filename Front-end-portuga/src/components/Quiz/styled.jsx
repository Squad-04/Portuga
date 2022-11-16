import styled from "styled-components";

export const QuizUIX = styled.div`

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: rgb(223, 247, 235);
    }

    .container{
        border: 1px solid rgb(99, 173, 99);
        border-radius: 7px;
        box-shadow: 10px 10px 15px rgb(0 0 0 / 18%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 25px;
        height: auto;
        margin: 0px 45.5px;
        background-color: #FFFF;
        gap: 40px;

        img{
            width: 25rem;
            height: auto;
            
        }
    }

    .btn-group{
            width: 20rem;
            border-radius: 6px;
            justify-content: center;
        }

    .options{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-left: 40px;
    }
    .questions{
        margin: 0px 20px;
    }

    .correct-answer{
        background-color: green;
    }

    .wrong-answer{
        color: red;
    }
`;