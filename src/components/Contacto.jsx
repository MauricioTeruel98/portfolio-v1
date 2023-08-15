import React from 'react'
import redesSociales from '../data/redesSociales'
import { Link } from 'react-router-dom'
import usePortfolio from '../hooks/usePortfolio'
import EnterLink from './elements/EnterLink'
import { useForm } from 'react-hook-form'
import '../assets/css/contact.css'

const Contacto = () => {

    const { clasesParaAnimacion } = usePortfolio();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const $form = document.querySelector('.contact-form'),
            $loader = document.querySelector('.contact-form-loader'),
            $response = document.querySelector('.contact-form-response')
        $loader.classList.remove('none')
        fetch(import.meta.env.VITE_URL_FORMSUBMIT, {
            method: 'POST',
            body: new FormData($form),
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
                window.location.hash = '#gracias'
                $form.reset()
            })
            .catch((err) => {
                console.log(err)
                let message = err.statusText || 'Ocurrió un error al enviar, intenta nuevamente'
                $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`
            })
            .finally(() => {
                $loader.classList.add('none')
                setTimeout(() => {
                    window.location.hash = '#close'
                }, 3000)
            })
    }


    return (
        <>
            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2 className='text-4xl'>CONTACTO</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center w-full'>
                <div className="card lg:w-1/2 glassie shadow-xl mt-20">
                    <div className="card-body">
                        <h2 className="card-title">Enviame un mensaje</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='contact-form w-44 sm:w-full mx-auto'>
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="form-control w-full md:w-1/2 my-0 sm:my-2">
                                    <label className="label">
                                        <span className="label-text">Nombre</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        {...register('Nombre')}
                                        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                                        className="input input-primary input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="form-control w-full md:w-1/2 my-0 sm:my-2">
                                    <label className="label">
                                        <span className="label-text">Teléfono</span>
                                    </label>
                                    <input
                                        type="number" 
                                        className="input input-primary input-bordered w-full" 
                                        id='phone'
                                        name='phone'
                                        pattern="[/^\d{10}$/]"
                                        {...register('phone')}
                                        title='Telefono no valido'
                                    />
                                </div>
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    name="email"
                                    id="email"
                                    title="email no valido"
                                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                                    className="input input-primary input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text">Mensaje</span>
                                </label>
                                <textarea
                                    name="coments"
                                    id="coments"
                                    {...register('coments')}
                                    cols="30"
                                    rows="5"
                                    className="textarea textarea-primary textarea-bordered h-24"
                                    required
                                />
                            </div>
                            <div className="contact-form-loader">
                                {errors.exampleRequired && <span>Este campo es requerido</span>}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="38"
                                    height="38"
                                    stroke="#d90062"
                                    viewBox="0 0 38 38"
                                >
                                    <g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
                                        <circle cx="18" cy="18" r="18" strokeOpacity="0.5"></circle>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform
                                                attributeName="transform"
                                                dur="1s"
                                                from="0 18 18"
                                                repeatCount="indefinite"
                                                to="360 18 18"
                                                type="rotate"
                                            ></animateTransform>
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <input
                                type="submit"
                                value="Enviar mensaje"
                                className="btn btn-secondary rounded-full"
                                onSubmit={handleSubmit}
                            />
                        </form>
                        <article id="gracias" className="modal transparente5">
                            <div className="relative px-6 py-4 mb-4 text-white bg-green-500 border-0 rounded">
                                <span className="inline-block mr-5 text-xl align-middle">
                                    <i className="fas fa-bell" />
                                </span>
                                <span className="inline-block mr-8 align-middle">
                                    <b className="capitalize">¡Enviado! </b> En breve estaremos en contacto
                                </span>
                                <button
                                    className="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
                                >
                                    <span>×</span>
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto