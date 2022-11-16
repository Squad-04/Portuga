import styled from "styled-components";
export const LoginUIX = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;  
    background-image: radial-gradient(circle at 50% 50%, #a4e0c8 0, #8ed5c1 16.67%, #6dc4b5 33.33%, #3aaea4 50%, #009895 66.67%, #00878d 83.33%, #007c8b 100%);
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

#botaoAdm{
    position: fixed;
    bottom: 0;
    width: 20%;
    text-decoration: none;
    color: black;
}

`;
