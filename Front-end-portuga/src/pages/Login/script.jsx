import { Navigate } from "react-router-dom";

const handleRegister = async(e) => {
    e.preventDefault();

    try{
        const { data } = await UserService.register(emailRegister, passwordRegister);
        alert(`Email ${emailRegister}, cadastrado com sucesso`);
        setShow(false);
    } catch(error){
        console.log('error');
    }
}

const loginUser = async (e) =>{
    e.preventDefault();
    try{
        const { data } = await UserService.loginUser(email, password)
        if(data?.email === email && data?.password == password){
            setUserInfo(data);
            Navigate("/home");
        }
    }catch ( error ){
        alert('Usuário ou senha invalidos, por favor tente novamente')
    }
}