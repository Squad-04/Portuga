import styled from "styled-components";
export const LoginUIX = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;  
    background-color: rgb(43, 143, 69);
    height:100vh;



    main{
        background-color: rgb(48,174,158);
        border-radius: 10px;
    }


.container-fluid {
    background: rgb(48,174,158);
    opacity: 90%;
    width: 100%;
    height: 100%;
    border-radius: 5%;
}

.cadastro {
    padding: 10px;
    margin: 2rem;
    flex-direction: column;

    h1{
        display: flex;
        justify-content: center;
    }

    button{
        margin-left: 2rem;
        margin: 20px;
        border-radius: 5px;
    }
}

.check{
    display: flex;
    margin: 10px;
}

.menuLog{
    padding: 5px;
    display: flex;
    flex-direction: column;

}

.msgError {
    text-align: center;
    color: #2c2d2e;
    background-color: aqua;
    padding: 10px;
    border-radius: 4px;
    display: none;
}

.model-cadastro{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 4px;
    padding: 35px;
    justify-content: center;
}

.help a{
    color: rgb(255, 255, 255);
}

.modal-backdrop{
    display: none;
  }

.clicandoAqui {
    color: white;
}

.link{
    text-decoration: none;
    color: white;
}
`;

