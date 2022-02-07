import React, { useState, useEffect, useRef } from 'react';

export const useFadeIn = (duration = 1, delay = 0) => {
    let flag = typeof duration !== "number" || typeof delay !== "number";
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [])
    return flag?{ref: element, style: {opacity: 0 } }: undefined;
}
