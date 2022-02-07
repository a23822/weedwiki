import React, { useState, useEffect, useRef } from 'react';
import { ElementType } from "htmlparser2";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(typeof onClick !== "function"){
            return;
        }
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        }
    },[])
    return typeof onClick !== "function" ? element : undefined;
};