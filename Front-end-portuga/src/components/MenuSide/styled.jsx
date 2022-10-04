import styled from "styled-components";

export const MenuSideUIX = styled.div`

   

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 220px;
   height: auto;
   gap: 30px;
   
   


   .menu{
    border: solid rgb(219, 209, 209);
    border-radius: 10px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13rem;
    height: 9em;
    padding: 6px;
    margin-top: 11rem;
    position: fixed;

      button{
         margin-left: 40px;
         border-radius: 4px;

      }
      .modal{
         padding: 30px;
      }
      
      
}

 .menuNav{
    border: solid rgb(219, 209, 209);
    border-radius: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 13rem;
    height: 10em;
    padding: 8px;
    position: fixed;
    margin-top: 32rem;
    
    
    
    button{
      margin-left: 18px;
      width: 70%;
    }
} 

.modal-backdrop{
    display: none;
  }

  iframe{
   margin-top: 28rem;
   position: fixed;
  }

`;