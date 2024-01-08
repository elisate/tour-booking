import React from 'react'
import './place.css';
function Place() {
  return (
    <div className="place1">
      <iframe
        title="My Map"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="
        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.5028990665!2d-122.4194153508046!3d37.77492951054691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e84a431d9d7%3A0x50b9d02be4a440ef!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611602582113!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
}

export default Place