import React from 'react'
function Contact() {
    return (
        <div id='Contact' className='.all'>
            <div id="contact_title">
                <h1>Contact</h1>
            </div>
            <div class="contact_container_flex">
                <div class="contact_container">
                    {/* <!-- <a href=""> --> */}
                    <div class="contact_cart">mail</div>
                    {/* <!-- </a> --> */}
                    {/* <!-- <a href=""> --> */}
                    <div class="contact_cart">github</div>
                    {/* <!-- </a> --> */}
                    <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                        <div class="contact_cart">linkidin</div>
                    </a>
                    <a href="https://twitter.com/Ndiaye53287322" target="_blank">
                        <div class="contact_cart">twitter</div>
                    </a>
                    <a href="https://www.instagram.com/just.a.coder_/" target="_blank">
                        <div class="contact_cart">instagame</div>
                    </a>
                    {/* <!-- <a href="" target="_blank"> --> */}
                    <div class="contact_cart">youtube</div>
                    {/* <!-- </a> --> */}
                    {/* <!-- <a href="" target="_blank"> --> */}
                    <div class="contact_cart">phone</div>
                    {/* <!-- </a> --> */}
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="mail"></ion-icon>
                    :Pmomar44@gmail.com
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="logo-github"></ion-icon>
                    :PMomarmar01
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    :Pmomar44@gmail.com
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="logo-tumblr"></ion-icon>
                    :Pmomar44@gmail.com
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="logo-instagram"></ion-icon>
                    :JUSTE_A_CODER
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="logo-youtube"></ion-icon>
                    :Pmomar44@gmail.com
                </div>
                <div class="contact_cart_info">
                    <ion-icon name="call"></ion-icon>
                    :77-727-86-55
                </div>
            </div>
        </div>
        // </div>

    )
}


export default Contact