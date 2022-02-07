import React, {useState, useEffect, useRef } from 'react';

export const useNetwork = onChange => {
    let flag = true;
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }

    useEffect(()=>{
        window.addEventListener("online", handleChange);
        window.addEventListener("ofline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("ofline", handleChange);
        }
    }, [])

    return flag?status:undefined;
}