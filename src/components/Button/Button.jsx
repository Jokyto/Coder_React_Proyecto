import React from 'react'

const Button = (props) => {
    const background_color = {
        backgroundColor: props.color,
    }



  return (
    <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.classes}
        style={background_color}
    >
        {props.text}
        {props.children}
    </button>
  );
}

export default Button;
