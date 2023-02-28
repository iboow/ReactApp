import React from "react";
import { useState } from "react";
import '../styles/components.sass/collapse.scss'

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { page } = props;
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <>
      <div className={`container-title ${!isOpen ? 'close' : ''}`}>
      <h3 className={page === 'about' ? 'about-collapse-title' : 'accomodation-collapse-title'}>
          {props.labels}
        </h3>
        <button className={`button ${isOpen ? 'rotate' : ''}`} onClick={toggle}>
        </button>
        </div>
        {isOpen && <div className={`content ${page === 'about' ? 'about-collapse-content' : 'accomodation-collapse-content'}`}>
        {props.content}
</div>}
     </>
    );
  };

  export default Collapse;