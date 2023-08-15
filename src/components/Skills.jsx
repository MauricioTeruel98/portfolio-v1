import React from 'react'
import skills from '../data/skills'

const Skills = () => {

    return (
        <>
            <div className='mt-20'>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">
                        <h2 className='text-4xl'>SKILLS</h2>
                    </div>
                </div>
            </div>

            <div className="w-full glassie p-8 rounded-2xl shadow-lg mt-20">
                <div className='flex flex-wrap justify-between'>
                    {
                        skills.map(skill => (
                            <div className='p-3' key={skill.id}>
                                {skill.icono}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills