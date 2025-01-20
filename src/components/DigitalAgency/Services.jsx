import React from 'react';
import Link from 'next/link';
//= Components
import StatementSplitter from '../Common/StatementSplitter';
//= Data
import data from '@/data/DigitalAgency/services.json';

function Services({ lightMode }) {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h6 className="dot-titl-non mb-15">Features</h6>
              <h3 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">We help you to go online &</span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">increase your conversion rate.</span>
                </span>
              </h3>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all">
                  <Link href="/dark/page-services">View All Services
                    <span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div className={`item-bord2 radius-10 wow fadeIn ${index !== data.length - 1 ? 'md-mb50' : ''}`} data-wow-delay=".5s">
                  <div className="icon-img-60 mb-40">
                    <img src={`${lightMode ? '/light/' : '/dark/'}${item.image}`} alt="" />
                  </div>
                  <h6 className="mb-30"><StatementSplitter statement={item.title} /></h6>
                  <ul className="check-list rest opacity-8">
                    {
                      item.features.map((feature, idx) => (
                        <li className="mb-10" key={idx}>
                          <span className="fz-12 mr-5"><i className="fas fa-check"></i></span> {feature}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services