/* eslint-disable no-template-curly-in-string */
import { ButtonLogin, ButtonRedes, ContainerLogin, ContainerLoginForm, ContainerLoginFormTitle, ContainerRedes, DivInputs } from '../styles/GoblaStyles';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { MyInput } from '../components/form/MyInput';
import { MdEmail } from 'react-icons/md';
import { BsGoogle } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import * as Yup from 'yup'
import { AiFillFacebook, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormProps {
    email: string;
    password: string;
}

const LoginSchema = Yup.object({
    email: Yup
        .string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email invalido")
        .required("Campo requerido"),
    password: Yup
        .string()
        .min(6, "Minimo 6 caracteres")
        .max(20, "Maximo 20 caracteres")
        .required("Campo requerido"),
})

export const Login = () => {

    const methods = useForm<FormProps>({
        resolver: yupResolver(LoginSchema)
    })
    const navigate = useNavigate();

    const [data , setData] = useState(null)

    const { handleSubmit } = methods

    const handleSubmitForm = async(data: FormProps) => {
        const dataI= await axios.post(`http://localhost:3001/api/auth/signIn`,data)
        setData(dataI.data)
        window.localStorage.setItem('userData', JSON.stringify(dataI.data))
        navigate('/user')
    }
    console.log(data)
    return (
        <FormProvider
            {...methods}
        >
            <ContainerLogin>
                <ContainerLoginForm>
                    <div className='container-title'>
                        <h1>Login</h1>
                    </div>
                    <ContainerLoginFormTitle
                        as="form"
                        onSubmit={handleSubmit(handleSubmitForm)}
                    >
                        <DivInputs>
                            <MyInput
                                name="email"
                                placeholder="Email"
                            />
                            <MdEmail className='svg' />
                        </DivInputs>
                        <DivInputs>
                            <MyInput
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <RiLockPasswordFill className='svg' />
                        </DivInputs>
                        <ButtonLogin
                            type="submit"
                        >
                            Login
                        </ButtonLogin>
                        <p>Or continue with these social profile</p>
                    </ContainerLoginFormTitle>
                    <ContainerRedes>
                        <ButtonRedes>
                            <BsGoogle />
                        </ButtonRedes>
                        <ButtonRedes>
                            <AiFillFacebook />
                        </ButtonRedes>
                        <ButtonRedes>
                            <AiOutlineTwitter />
                        </ButtonRedes>
                        <ButtonRedes>
                            <AiFillGithub />
                        </ButtonRedes>
                    </ContainerRedes>
                    <div className='div'>Adready a member?<Link to='/'>Login</Link></div>
                </ContainerLoginForm>
            </ContainerLogin>
        </FormProvider>
    )
}
