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
    const [mensaje,setMensaje] = useState('')

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
            const url = 'http://51.255.50.207:5000/register'

            const respuesta = await fetch (url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const resultado = await respuesta.json()
            

            if (resultado.error == null){ //Si todo ha ido bien
                localStorage.setItem('token',JSON.stringify(resultado.token))
                localStorage.setItem('primeraVez', JSON.stringify(true))
                setError(false)
                navigate('/myAccount/perfil')
                return 
            }
            else {
                setError(true)
                setMensaje(resultado.error)
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
                    localStorage.setItem('nick',JSON.stringify(values.nick))
                    console.log('values', values);
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
                            <Alerta>{mensaje}</Alerta>
                        ) : null }
                    <div className='mb-4'>
                        <label 
                            className='text-verde uppercase font-roboto text-xl'
                            htmlFor='nombre'
                        > Nombre de usuario</label>
                        <Field
                            id="nombre"  
                            type='text'
                            className="mt-4 block w-full p-3 bg-gray-50 rounded-lg border-transparent"
                            placeholder="Introduzca su nombre de usuario"
                            name="nick"
                        />

                        {errors.nick && touched.nick ? (
                            <Alerta>{errors.nick}</Alerta>
                        ) : null }

                    </div>

                    <div className='mb-4'>
                        <label 
                            className='text-verde font-roboto uppercase text-xl'
                            htmlFor='email'
                        >Correo Electrónico</label>
                        <Field
                            id="email"  
                            type='text'
                            className="mt-4 block w-full p-3 bg-gray-50 rounded-lg border-transparent"
                            placeholder="Introduzca su correo electrónico"
                            name="e_mail"
                        />
                        {errors.e_mail && touched.e_mail ? (
                            <Alerta>{errors.e_mail}</Alerta>
                        ) : null }
                    </div>

                    <div className='mb-4'>
                        <label 
                            className='text-verde font-roboto uppercase text-xl'
                            htmlFor='passwd'
                        >Contraseña</label>
                        <Field
                            id="passwd"  
                            type='password'
                            className="mt-4 block w-full p-3 bg-gray-50 rounded-lg border-transparent"
                            placeholder="Introduzca su contraseña"
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