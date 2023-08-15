import React from 'react'
import personalInfo from '../data/infoPersonal'

const PersonalInfo = () => {

    return (
        <>
            {/* INFO PERSONAL */}
            <div className='md:w-2/3'>
                <div className="card heigth-persona-info glassie">
                    <div className="card-body lg:flex-row justify-between">
                        <div>
                            <h1 className="card-title text-4xl mb-5">{personalInfo.miNombre}</h1>
                            <p className='text-xl'>{personalInfo.informacion}</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-end">
                            <div className="avatar">
                                <div className="w-40 md:w-60 rounded-xl">
                                    <img src={personalInfo.foto} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo