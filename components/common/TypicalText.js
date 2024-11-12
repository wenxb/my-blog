'use client'
import {TypeAnimation} from 'react-type-animation';
import React from "react";

const TypicalText = ({text = [], ...props}) => {
    return (
        <TypeAnimation
            {...props}
            sequence={text}
            wrapper="p"
            cursor={true}
            repeat={1}
            speed={40}
        />
    );
};

export default TypicalText;
