import React from 'react';
import "./About.css";
import img3 from "../assets/images/img3.png"

const About = () => {
  return (
    <>
    <div className='about-container' id='About'>
      <div className='row'>
        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
            <img src={img3} alt="pic"></img>
        </div>
        <div className='col-md-6  about-content'>
            <h1>About Me</h1>
            <p>Minim dolore sunt excepteur magna est ullamco proident. Consequat anim id veniam quis adipisicing ullamco est. Cillum Lorem esse non qui eu laboris mollit veniam sint.Duis minim nostrud mollit anim. Eiusmod culpa consequat proident magna minim sit mollit quis ex esse. Eiusmod reprehenderit eu aliquip ea aliqua tempor deserunt commodo irure sit nulla pariatur dolore id. Laborum ipsum aliquip mollit veniam adipisicing eiusmod. Sint mollit Lorem aliqua nisi excepteur labore irure deserunt ex nulla. Excepteur anim occaecat nisi laboris aute cillum do nulla laborum exercitation ex. Laboris est nulla cupidatat do.Labore minim eu irure cillum ex consectetur est in duis laborum. Incididunt Lorem occaecat sint excepteur exercitation minim cupidatat do nulla ipsum. Commodo ea sint aliqua veniam officia proident do commodo nisi officia magna fugiat. Nisi labore irure proident in esse sunt officia excepteur officia consectetur veniam eu ea. Nostrud est elit ipsum reprehenderit duis est do ipsum aliquip consequat quis est aliquip eu.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
