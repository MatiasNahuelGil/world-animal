import './Footer.css'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <>
           <footer className="footer">
              <div>
                  <h3>World Animal</h3>
              </div>
              <div className='networks__container'>
                    <FaGithubSquare/>
                    <FaLinkedin/>
              </div>
           </footer>
        </>
    )
}