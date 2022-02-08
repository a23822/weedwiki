import React, { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
    const flag = true;

    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    const onScroll = () => {
        setState({y: window.scrollY, x: window.scrollX});
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return flag?state:undefined;
}