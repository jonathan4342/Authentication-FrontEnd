/* eslint-disable no-template-curly-in-string */
import { ContainerLogin, ContainerLoginForm, ContainerLoginFormTitle, DivInputs } from '../styles/GoblaStyles';
import { yupResolver } from '@hookform/resolvers/yup';
import { RiCodeBoxFill } from 'react-icons/ri';
import { FormProvider, useForm } from 'react-hook-form';
import { MyInput } from '../components/form/MyInput';
import * as Yup from 'yup'

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
        resolver:yupResolver(LoginSchema)
    })

    const { handleSubmit } = methods

    const handleSubmitForm = (data: FormProps) => {
        console.log(data);
    }

    return (
        <FormProvider
            {...methods}
        >
            <ContainerLogin>
                <ContainerLoginForm>
                    <div className='container-title'>
                        <h3><RiCodeBoxFill /> devchallenge</h3>
                        <p>Login</p>
                    </div>
                    <ContainerLoginFormTitle
                        as="form"
                        onSubmit={handleSubmit(handleSubmitForm)}
                    >
                        <DivInputs>
                            <MyInput
                                name="email"
                                placeholder="Correo"
                            />
                        </DivInputs>
                        <DivInputs>
                            <MyInput
                                name="password"
                                placeholder="Contraseña"
                                type="password"
                            />
                        </DivInputs>
                        {/* <DivInputs>
                            <input
                                type="text"
                                placeholder='Email'
                                {...register("email", {
                                    required: "Este campo es requerido",
                                    setValueAs: (value) => value.trim(),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "El email no es valido"
                                    }
                                })}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </DivInputs>
                        <DivInputs>
                            <input
                                type="password"
                                placeholder='password'
                                {...register("password", {
                                    required: "Este campo es requerido",
                                    setValueAs: (value) => value.trim(),
                                    minLength: {
                                        value: 6,
                                        message: "La contraseña debe tener al menos 6 caracteres"
                                    }
                                })}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                        </DivInputs> */}
                        <button
                            type="submit"
                        >
                            Login
                        </button>
                    </ContainerLoginFormTitle>
                </ContainerLoginForm>
            </ContainerLogin>
        </FormProvider>
    )
}
