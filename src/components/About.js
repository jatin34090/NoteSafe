import React from 'react'

export const About = (props) => {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: '2px solid',
  }

  return (
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Keep Your Daily Notes Safe and Secure with NoteSafe</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Are you tired of losing important notes or having them fall into the wrong hands? Look no further than NoteSafe, the user-friendly online platform for securely storing and managing your daily notes.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Securely Store Your Notes</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              NoteSafe offers a safe and secure environment for your notes, ensuring that they are kept private and protected. Our platform uses industry-standard encryption to safeguard your data, so you can have peace of mind knowing that your notes are safe and secure.
            </div>
          </div>
        </div>


        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>  Easily Manage Your Notes</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              With NoteSafe, you can easily create and save notes, and access them whenever you need to. Our platform allows you to organize your notes by category or date, making it simple to find the information you need. You can also easily update or delete your notes as needed, giving you full control over your information.
            </div>
          </div>
        </div>


        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>User-Friendly Interface</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Our platform is designed to be easy to use, even for those who are not tech-savvy. Whether you're a busy professional, a student, or just someone who likes to keep organized, NoteSafe is the perfect tool for managing your daily notes. Our intuitive interface makes it easy to get started and use the platform to its full potential.
            </div>
          </div>
        </div>


        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <strong> Sign Up Today</strong>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Sign up today and start keeping your notes safe and secure with NoteSafe. Our platform is the perfect tool for anyone looking to manage their daily notes with ease and confidence.
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}
