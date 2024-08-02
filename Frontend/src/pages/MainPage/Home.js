import React from 'react';
import wave from './javavid.mp4';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <>
      <section className="showcase">
        <video src={wave} autoPlay muted loop />
        <div className="overlay">
          <div className="text">
            <h1 className='head'>Never stop learning.<br/> Never stop growing.</h1> 
            <h1 className='headss'>Learn with Us!</h1>
            <p className='para'>Learn from the top Instructors around the World.<br/>Learn the latest Technology Trends.</p>
          </div>
        </div>
      </section>
      <div class="container-xxl py-5" className='space'>
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 class="mb-3">Skilled Instructors</h5>
                            <p>Our Instructors Says: <br/>If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 class="mb-3">Online Courses</h5>
                            <p>The most profound words will remain unread unless you can keep the learner engaged. You can't see their eyes to know if they got it so … say it, show it, write it, demo it and link it to an activity.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 class="mb-3">Home Assignments</h5>
                            <p>To Prepare all our students for future. Instructors provides best quality Assignments for practice. Assignments which include all chapters Question for better understand of the entire Course.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 class="mb-3">Best Study Material</h5>
                            <p>With our quality study material any can achieve their goal and with the top instructors nothing can stop you. At the Time of Exam any student can refer the study material and ace any exam or interview.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;
