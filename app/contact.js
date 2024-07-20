import "../app/globals.css"
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
export default function Home() {
    const form = useRef()
    const send = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_zr3sp5z','template_lkaf4tm', form.current, {
            publicKey:'T7aOpot0of9C-SXY4',
        })
        document.getElementById("form").reset();
    }
  return (
    <section className="contact">
        <h1 className="big">
            Get in Touch Today
        </h1>
       <form ref={form} onSubmit={send} id="form">
        <div className="extra">
        <h1>Name</h1>
        <input className="small" type="text" name="user_name" />
        <h1>Email</h1>
        <input className="small" type="email" name="user_email" />            
        </div>
        <div className="main">
        <h1>Message</h1>
        <textarea name="message" className="small2"/>
        </div>
        <input type="submit" value="Send" className="button"/>

    </form>
    </section>
  );
}
