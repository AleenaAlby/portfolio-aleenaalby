import React from 'react'
import './Banner.css'
import Typewriter from 'typewriter-effect';

function Banner() {
    return (
        <div className="text-div ">
            <div className="center-all">
                <h1 className="title">Hello There, </h1>
                <h2 className="sub-title">Stranger</h2>
            </div>

            <div className="contact">
                {/* <h1 className="name">I m Aleena Alby</h1> */}
                <div className="type-writer">
                <Typewriter 
                options ={{
                    loop: true, 
                    autoStart: true, 
                    skipAddStyles: true
                }} 
                onInit={(typewriter) => {
                    typewriter.typeString('Aleena Alby')
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                }
                } />
                </div>
               
                <p className="caption">A normal mortal with immortal dreams</p>
                <p className="message">My inbox is always open if you want to communicate with me. Hit me up if you
                    have some question, want a collaboration or just want to talk about aliens or anything.
                    I'll try to get back to you as soon as I can.</p>

                <a href="https://github.com/AleenaAlby"><img className="social" alt='github' src="https://img.icons8.com/windows/32/000000/github-squared.png" width='30'/></a>
                <a href="https://www.facebook.com/aleena.alby.9/"><img className="social" alt='facebook' src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" width='30'/></a>
                <a href="https://www.instagram.com/aleena__alby/"><img className="social" alt='instagram' src="https://img.icons8.com/ios-glyphs/30/000000/instagram.png" width='30'/></a>
                <a href="https://www.linkedin.com/in/aleena-alby/"><img className="social" alt='linkedin' src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" width='30'/></a>
                <a href="https://gitlab.com/aleenaalby20"><img className="social" alt='gitlab' src="https://img.icons8.com/ios-filled/50/000000/gitlab.png" width='30'/></a>
                <a href="mailto:aleenaalby.23@gmail.com"><img className="social" alt='mail' src="https://img.icons8.com/material-sharp/24/000000/gmail-login.png"width='30' /></a>
                
            </div>

        </div>
    )
}

export default Banner
