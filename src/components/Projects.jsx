import React from "react";
import Card from './Card'
import data from './ProjectData'


const Projects = () => {

    return (
        <div className="project-container" id='project'>
            <h1>Projects</h1>
            <div className="card-container">
                {
                    data.map((item, id) => {
                        return (<Card key={id} img={item.img} title={item.title}
                            discription={item.discription}
                            techstack={item.techstack}
                        />)
                    })
                }
            </div>

        </div>
    );
};
export default Projects;
