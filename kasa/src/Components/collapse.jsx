import React from "react";
import { useState } from "react";
import '../styles/components.sass/collapse.scss'

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <>
      <div className={`container-title ${!isOpen ? 'close' : ''}`}>
        <h3>{props.labels}</h3>
        <button className={`button ${isOpen ? 'rotate' : ''}`} onClick={toggle}>
        </button>
        </div>
        {isOpen && <div>{props.children}</div>}
     </>
    );
  };

  export default Collapse;