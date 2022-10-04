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
        flex-direction: column;
        padding: 25px;
        height: auto;
        margin: 0px 45.5px;
        background-color: #FFFF;
        

        h3 {
        display: flex;
        justify-content: center;
        padding: 10px;
        background-color: #E4CFA9;
        margin: 10px;
    }

        h4{
            color: #212529;
            font-size: 24px;
            margin: 30px;
        }

        img{
            width: 30%;
            margin: 10px;
            margin-left:20rem;
            
        }
    }

    .btn-group{
            margin-left: 20rem;
            width: 20rem;
            border-radius: 6px
        }

    .options{
            display: flex;
            flex-direction: column;
            
            input{
                border: solid red;
            }

        
    }

`;