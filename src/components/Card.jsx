import React from "react";
import '../Styles/Projects.css'
import { FaReact } from "react-icons/fa";

const Card = ({ id, img, title, discription, techstack }) => {

  console.log(techstack);

  return (
    <div className="card">
      <img className='card-img' src={img} alt="project Img" />
      <div className='card-content'>
        <span className='card-title'><h4>{title}</h4></span>
        <div>{discription}</div>

      </div>
      <div className='tech-container'>
        <h4 className='techstack'>{
          techstack.map((item) => {
            return (
              <li>
                {React.createElement(item)}
              </li>)
          }
          )
        }

        </h4>
      </div>



    </div>
  );
};
export default Card;
