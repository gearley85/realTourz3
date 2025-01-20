/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

function Intro() {
  useEffect(() => {
    document.addEventListener("mousemove", updateParallax);
    return () => document.removeEventListener("mousemove", updateParallax);
  }, []);

  function updateParallax(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    // Loop through each target element
    const parallaxTargets = document.querySelectorAll(".parallax");
    parallaxTargets.forEach((target) => {
      // Get the target's speed
      let speed = target.dataset.speed;
      // Calculate the new position based on the mouse position and speed
      let x = (window.innerWidth / 2 - mouseX) * speed;
      let y = (window.innerHeight / 2 - mouseY) * speed;
      target.style.transform = `translate3d(${x / 10}rem, ${y / 10}rem, 0)`;
    });

    // Schedule the next animation frame
    requestAnimationFrame(updateParallax);
  }

  return (
    <section
      className="intro-img-parlx section-padding pb-0 sub-bg"
      data-scroll-index="2"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 valign md-hide">
            <h2 className="max-text" data-text="Part 107 Licensed Drone Pilot">
              {" "}
              Part 107 Licensed Drone Pilot
            </h2>
          </div>
          <div className="col-lg-3 order2">
            <div className="img">
              <img
                src="/dark/assets/imgs/freelancer/TreeAbove.jpg"
                alt=""
                className="parallax"
                data-speed="0.01"
              />
              <span className="star-shape">
                <img
                  src="/dark/assets/imgs/svg-assets/star-shape.png"
                  alt=""
                  className="parallax"
                  data-speed="-0.01"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-3 valign order1">
            <div className="text-qoute">
              <span className="exp mb-30 main-bg">About Me</span>
              <p>
                From aerial photography to indoor drone video, to wedding and
                family photography, I can provide you with the photography
                services you need using the latest technology and techniques. My
                desire is to show you exactly what you are looking to rent or
                buy, or to capture the moments that you want to remember
                forever.
              </p>
              {/* <div className="stauts mt-50">
                <div className="item d-flex align-items-center">
                  <h2 className="mr-20">12k</h2>
                  <p className="fz-14">
                    Happy Users <br /> Around World
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
