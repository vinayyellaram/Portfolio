import React from "react"
import Img from '../assets/images/image1.png'
import '../Styles/About.css';
import Myimg from '../assets/images/item7.png'
// import { DivType } from "react-tsparticles";

const About = () => {


    return (
        <div className='about' id="about">
            <h1>About Me : </h1>

            <div className='about-content'>
                <div className='img-container'>
                    <img src={Myimg} alt="My Img" className='my-img ' />
                </div>

                <div className='about-text'>
                    Namaste 🙏🏻 I am vinay
                    <p>
                        When i was in my grade 10th we had computer class where we use to learn basic of how the computer works and there is my friend typing a lot faster than we us in the whole classroom and we here searching for alphabets It would be dum but this inspired me to learn more about computers.
                    </p>

                    <p>
                        Eventually  choose Compter Science as vocationl subject for 10+2 (Intermediate )  the computer science helped to increase some persentage to overall score But not enough to get addmission for computer science graduation as the % requirement was high.But due to the reason I was Iron Man movie I was also facinated about how to make circuits , electronics etc so my second intrest was electronics and telecommunication and i landed in EXTC branch.
                        Learned alot in 2 years but pandimic shook all of us.
                    </p>

                    <p>
                        Being in now started web development as I was always passionate about cooding and the best part of web development is it is visible in an instant which made me learn more about web development ,tech stack ,libraries.
                    </p>

                    <p>
                        I Not only proramming in high-level language but being in extc also taught myself code in low-level language(8085,8051),as I don't want to be an inductor.Also learned Arduino to controll microcontrolled made some simple projects had fun and frustration to debug the code for hardware.
                    </p>
                    <p>
                        So this is how I landed in web development and I would be Happy to work in a startup rather than a corporate company.

                    </p>

                </div>
            </div>

        </div>
    )
}
export default About
