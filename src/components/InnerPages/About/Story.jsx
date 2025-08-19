import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <video id="comp-iv9d7w36_video" class="K8MSra" crossorigin="anonymous" playsinline="" preload="auto" loop="" autoplay="" src="https://video.wixstatic.com/video/31d778_a4244bb5a0fa4aa998a62b873356c5ba/720p/mp4/file.mp4" 
            style="height: 100%; width: 100%; object-fit: cover; object-position: center center; opacity: 1;"></video> */}
             <video width="600" controls autoPlay loop muted>
      <source src="/dark/assets/imgs/sample.mp4" crossOrigin="anonymous" preload="auto" loop="" autoPlay="" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
          </div>
          <div className="col-lg-4">
            <div className="mt-100"><h4>Sample Tour</h4></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Our Story</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>Having moved my family across the country, I discovered how difficult it is to find that perfect place for your family to live. 

We searched for weeks to try to find the perfect rental for our family. Between shaky/blurry FaceTime calls, and realtors telling me no (to a virtual tour), I felt there had to be a better way!

Thus, RealTourz was born! I want to show families moving across the country or even across town what the property they are interested in looks like before they invest more time/money into it. 

I hope to be able to serve you! </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story