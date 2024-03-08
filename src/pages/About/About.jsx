import React from 'react';
import "./About.css";
import aboutImg from '../../images/about-img.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className='about-title fs-26 ls-1'>BookHub</h2>
            <p className="fs-17">BookHub is a website where you can find a book by searching a key term. Its is a hub for the book enthusiast. The search will provide you with the list of books with their author name, publish year, etc. You can identify the books with their images also.</p>
            <p className="fs-17">How does it feels to be a part of BookHub. Interesting right? So, Start your book journey with loads of reads and serach. Join the book community by reading more and more books.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About
