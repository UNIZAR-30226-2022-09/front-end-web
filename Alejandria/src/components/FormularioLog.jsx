import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'

const FormularioLog = () => {

    const usuarioSchema = Yup.object().shape({
        nick: Yup.string()
                .min(3, 'El nombre debe tener al menos 3 caracteres')
                .max(15, 'El nombre no debe tener más de 15 caracteres')
                .required('El nombre de usuario es obligatorio'),
                        
        password: Yup.string()
                    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    })

    const handleSubmit = (valores) => {

    }

    return (
        <div className='my-5 bg-white shadow-md rounded-lg p-6'>

            <Formik 
                initialValues={{
                    nick: '',
                    password:''
                }}
                onSubmit={ (values) => {
                    handleSubmit(values)
                }}
                validationSchema={usuarioSchema}
            >
                {({errors,touched}) => {
                    return (
                <Form
                    className='mt-5'
                >
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
                            htmlFor='passwd'
                        >Contraseña</label>
                        <Field
                            id="passwd"  
                            type='password'
                            className="mt-4 block w-full p-3 bg-gray-50"
                            placeholder="Introduza su correo electrónico"
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