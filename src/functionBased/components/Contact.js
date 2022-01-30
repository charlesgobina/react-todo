import React from 'react';

const Contact = () => (
  <>
    <div className="contactWrapper">
      <div className="contactContext">
        <h1>Contact & Info</h1>
        <p className="contactInfo">
          Do you have any question or just want to say
          {' '}
          <strong>hello</strong>
          ?
          You can reach out to me
          Email: charles.gobina@gmail.com
        </p>
        <p className="contactLearn">
          <a href="https://ibaslogic.com/react-tutorial-for-beginners/">
            Learn React by building this Todo Web App
          </a>
        </p>
      </div>
    </div>
  </>
);

export default Contact;
