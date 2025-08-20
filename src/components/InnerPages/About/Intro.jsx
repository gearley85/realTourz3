import Link from 'next/link';
import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/freelancer/works/5.jpg" alt="" className="radius-10" />
              </div>
              <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/works/grid2/IndoorSample.jpg" alt="" className="radius-10" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Find out</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">what RealTourz</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">is all about</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Finding a new home is stressful</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Moving across the country or just across town, it can be difficult to find the "right" place.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">No one has the time or money</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Looking at multiple homes can take a lot of time and money, especially moving across the country.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Let us be your eyes</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">RealTourz is here to help show you exactly what your new place looks like. </p>
                  </div>
                </div>
                 <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What should I expect/How does it work?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <ol className="list-group list-group-numbered fz-14">
                    <li>
                      Submit our <Link className="underline" href='/#contact' >Contact Form</Link>
                    </li>
                    <li>
                       We will contact you to discuss your needs
                    </li>
                    <li>
                       We send you an invoice for a initial good faith deposit
                    </li>
                    <li>
                       We will schedule a time with the listing agent to do the tour
                    </li>
                    <li>
                       We will do the tour and upload the tour to a secure link
                      </li>
                      <li>
                       You will receive an invoice to pay the balance due
                      </li>
                      <li>
                       After payment, you will receive the link to view the tour and have 90 days to view
                      </li>
                      <li>
                       The entire process takes around 4-5 business days (depending on demand) and we will notify you of any delays
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro