import React, { use, useRef } from "react";
import emailjs from "@emailjs/browser";
import data from "@/data/app-data.json";
/* import { Button, TextField } from "@material-ui/core";
import SuccessModal from "./SuccessModal"; */

function Contact() {
  const form = useRef();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = data.emailjs_service_id;
    const templateId = data.emailjs_template_id;
    const userId = data.emailjs_public;
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsModalOpen(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="contact-crev section-padding" data-scroll-index="7">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head md-mb80">
              <h6 className="dot-titl-non mb-10">Get In Touch</h6>
              <h2 className="fz-50">
                We specialize in capturing stunning aerial and indoor footage of
                homes and businesses. Let us help view your desired property in
                a unique and captivating way. Contact us today to schedule a
                tour or for your Photography needs!
              </h2>
              <p className="fz-15 mt-10">Contact me for a custom quote.</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+17577746916">+1 757 774 69 16</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a
                    href="https://www.facebook.com/profile.php?id=61554654036068"
                    className="hover-this"
                  >
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a
                    href="https://www.youtube.com/@RealTourz757"
                    className="hover-this"
                  >
                    <span className="hover-anim">YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/real.tourz?igsh=a2ZrdTcxZG1iaWMy"
                    className="hover-this"
                  >
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
