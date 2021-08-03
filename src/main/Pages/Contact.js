import React from 'react'
function Contact() {
    const hoverOnContact = (e) => {
        let theContact = e.target
        console.log(theContact.innerHTML)
    }

    return (
        <div id='Contact' className='.all'>
            <div id="contact_title">
                <h1>Contact</h1>
            </div>


            <div class="contact_container_flex">
                <div class="contact_container">
                    {/* <a href="mail">
                        <div onMouseOver={hoverOnContact} class="contact_cart">mail</div>
                    </a> */}
                    <a href="https://github.com/PapeMNdiaye1" target="_blank">
                        <div onMouseOver={hoverOnContact} class="contact_cart">github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                        <div onMouseOver={hoverOnContact} class="contact_cart">linkedin</div>
                    </a>
                    <a href="https://twitter.com/Ndiaye53287322" target="_blank">
                        <div onMouseOver={hoverOnContact} class="contact_cart">twitter</div>
                    </a>
                    <a href="https://www.instagram.com/just.a.coder_/" target="_blank">
                        <div onMouseOver={hoverOnContact} class="contact_cart">instagam</div>
                    </a>
                    {/* <a href="" target="_blank">
                        <div onMouseOver={hoverOnContact} class="contact_cart">youtube</div>
                    </a> */}
                </div>
            </div>
            <div id="tel_gMail">
                Mail: Pmomar44@gmail.com <br />
                Tel: 77 727 86 55
            </div>

        </div>
    )
}


export default Contact