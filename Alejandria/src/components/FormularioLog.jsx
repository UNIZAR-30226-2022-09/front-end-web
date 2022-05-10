import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import { useState } from 'react'


const FormularioLog = () => {

    const navigate = useNavigate()
    const [error,setError] = useState(false)
    const [mensaje,setMensaje] = useState('')


    const usuarioSchema = Yup.object().shape({
        nickOcorreo: Yup.string()
                .min(3, 'El nombre debe tener al menos 3 caracteres')
                .max(15, 'El nombre no debe tener más de 15 caracteres')
                .required('El nombre de usuario es obligatorio'),
                        
        password: Yup.string()
                    .min(8, 'La contraseña debe tener al menos 8 caracteres')
                    .required('La contraseña es obligatoria')
    })

    const handleSubmit = async (valores) => {
        try {
            const url = 'http://51.255.50.207:5000/login'

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
                navigate('/myAccount')
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
                    nickOcorreo: '',
                    password:''
                }}
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={usuarioSchema}
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
                            name="nickOcorreo"
                        />

                        {errors.nickOcorreo && touched.nickOcorreo ? (
                            <Alerta>{errors.nickOcorreo}</Alerta>
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
                            className="mt-4 block w-full p-3 bg-gray-50 rounded-lg border-transparent"
                            placeholder="Introduzca su correo electrónico"
                            name="password"
                        />
                        {errors.password && touched.password ? (
                            <Alerta>{errors.password}</Alerta>
                        ) : null }
                    </div>

                    <input 
                        type="submit"
                        value="Iniciar Sesion"
                        className='mt-5 w-full p-3 text-white bg-verde
                        hover:bg-green-800 font-roboto text-xl rounded-lg uppercase'
                    />
                    
                </Form>
                )}}
            </Formik>

        </div>
    )
}

export default FormularioLog