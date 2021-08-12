import { React, PropTypes } from 'react'



function Intro({ title }) {
    return (
        <div id='TheIntro'>
            <div className="all" id="home">
                <div className='container1'>
                    <div className='name-container'>

                        <div id="my_name">
                            <h1>PAPE M<strong>.</strong> NDIAYE</h1>
                        </div><br />
                        <div id="hello">
                            <h1>
                                DESIGNER & FULL-STACK<br />
                                DEVELOPER
                            </h1>
                        </div>

                    </div>
                    <div className='profile-picture'>

                    </div>

                </div>
                <div className='container2'>

                    <div id="home_logo">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1366 768">
                            <path d="M406,503c12.18-2.53,15.41-8.3,5-19L298,360l139-138h110L407,362l130,141H406z" />
                            <path d="M959,503c-12.18-2.53-15.41-8.3-5-19l113-124L928,222H818l140,140L828,503H959z" />
                            <path d="M815.5,577.5h42c-9.92-2.38-16.5-6.9-19-14L720.08,222.92c-0.97-2.78-4.8-3.05-6.14-0.42l-131.44,258
         c-9,14-15.21,17.52-30,23h127c-15.45-7.08-20.63-14.8-18-23l36.61-74.17c1.46-2.96,4.47-4.83,7.77-4.83h62.89
         c2.83,0,6.35,1.78,7.28,4.45L830.5,563.5C832.5,570.5,823.58,574.53,815.5,577.5z M764.31,394.5h-53.99c-2.71,0-4.5-2.82-3.35-5.27
         l32.71-69.73c1.04-2.21,5.23-2.06,6.05,0.24l23.34,67.99C770.26,391.03,767.81,394.5,764.31,394.5z" />
                            <path d="M797.23,501.3" />
                        </svg>

                    </div>

                    <div id='name_in_mobil_mode'>

                        <div id="my_name">
                            <h1>PAPE M<strong>.</strong> NDIAYE</h1>
                        </div><br />
                        <div id="hello">
                            <h1>
                                DESIGNER & FULL-STACK<br />
                                DEVELOPER
                            </h1>
                        </div>
                    </div>

                    <div id="intro">
                        <h4 className="intro_title">
                            Je suis un graphiste et un developeur freelance, allier les deux metiers me permettent d'avoir une vision global sur n'importe quel projet de création digital.
                        </h4>
                    </div>

                    <div id="tel_gMailin_mobil_mode">
                        Mail: Pmomar44@gmail.com <br />
                        Tel: 77 727 86 55
                    </div>

                </div>



            </div>


            <div className="network_container">
                <a href="https://github.com/PapeMNdiaye1" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                </a>

                <a href="https://www.instagram.com/just.a.coder_/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                </a>

                <a href="https://twitter.com/Ndiaye53287322" target="_blank">
                    <div className="network">
                        <ion-icon name="logo-tumblr"></ion-icon>
                    </div>
                </a>
            </div>

            <div id="tel_gMail">
                Mail: Pmomar44@gmail.com <br />
                Tel: 77 727 86 55
            </div>
        </div>
    )
}

Intro.defaultProps = {
    title: 'pape',
}





export default Intro