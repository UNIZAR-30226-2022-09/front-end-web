import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import axios from 'axios'
import { useState } from 'react'

const FormularioReg = () => {

    const navigate = useNavigate()
    const [error,setError] = useState(false)

    const nuevoUsuarioSchema = Yup.object().shape({
        nick: Yup.string()
                .min(3, 'El nombre debe tener al menos 3 caracteres')
                .max(15, 'El nombre no debe tener más de 15 caracteres')
                .required('El nombre de usuario es obligatorio'),


        e_mail: Yup.string().required('El email es obligatorio')
                        .email('Email no válido'),

        password: Yup.string().required('La contraseña es obligatoria')
                    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    })



    const handleSubmit = async (valores) => {
        try {
            const url = 'http://51.255.50.27:5000/register'

            const { data } = await axios.post(url, {
                nick,
                e_mail,
                password
            });
            
            if (data === 'token'){
                localStorage.setItem(data)
                navigate('/myAccount')
                return 
            }
            else {
                setError(true)
            }

        } catch(error){
            console.log(error)
        }
    }



    return (
        <div className='my-5 bg-white shadow-md rounded-lg p-6'>

            <Formik 
                initialValues={{
                    nick: '',
                    e_mail: '',
                    password:'',
                }}
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)

                    resetForm()
                }}
                validationSchema={nuevoUsuarioSchema}
            >
                {({errors,touched}) => {
                    return (
                <Form
                    className='mt-5'
                >
                    {error ? (
                            <Alerta>El usuario ya existe</Alerta>
                        ) : null }
                    <div className='mb-4'>
                        <label 
                            className='text-verde uppercase font-roboto text-xl'
                            htmlFor='nombre'
                        > Nombre de usuario</label>
                        <Field
                            id="nombre"  
                            type='text'
                            className="mt-4 block w-full p-3 bg-gray-50 rounded-lg"
                            placeholder="Introduza su nombre de usuario"
                            name="nick"
                        />

                        {errors.nick && touched.nick ? (
                            <Alerta>{errors.nick}</Alerta>
                        ) : null }

                    </div>

                    <div className='mb-4'>
                        <label 
                            className='text-verde font-roboto uppercase text-xl rounded-lg'
                            htmlFor='email'
                        >Correo Electrónico</label>
                        <Field
                            id="email"  
                            type='text'
                            className="mt-4 block w-full p-3 bg-gray-50"
                            placeholder="Introduza su correo electrónico"
                            name="e_mail"
                        />
                        {errors.e_mail && touched.e_mail ? (
                            <Alerta>{errors.e_mail}</Alerta>
                        ) : null }
                    </div>

                    <div className='mb-4'>
                        <label 
                            className='text-verde font-roboto uppercase text-xl rounded-lg'
                            htmlFor='passwd'
                        >Contraseña</label>
                        <Field
                            id="passwd"  
                            type='password'
                            className="mt-4 block w-full p-3 bg-gray-50"
                            placeholder="Introduza su correo contraseña"
                            name="password"
                        />
                        {errors.password && touched.password ? (
                            <Alerta>{errors.password}</Alerta>
                        ) : null }
                    </div>

                    <input 
                        type="submit"
                        value="Crear Cuenta"
                        className='mt-5 w-full p-3 text-white bg-verde
                        hover:bg-green-800 font-roboto text-xl rounded-lg uppercase'
                    />
                    
                </Form>
                )}}
            </Formik>




        </div>
    )
}

export default FormularioReg