import React from 'react';
import ProjectLayout from './projectlayout';
const ProjectList = ({projects})=>{
    return (
        <div className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center'>
            {projects.map ((projects, index)=>{
                return (
                    <ProjectLayout key ={index} {...projects}/>
                )
            })}
        </div>
    )
}
export default ProjectList