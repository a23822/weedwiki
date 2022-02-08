import React, { useState, useEffect, useRef } from 'react';
import { ElementType } from 'htmlparser2';

export const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if(element.current){
            if (element.current.requestFullScreen) {
                element.current.requestFullScreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullScreen) {
                element.current.webkitRequestFullScreen();
            } else if (element.current.msRequestFullScreen) {
                element.current.msRequestFullScreen();
            }

            runCb(true);
        }
    };
    
    const exitFull = () => {
        
        if (document.exitFullScreen {
            document.exitFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullScreen) {
            document.webkitExitFullScreen();
        } else if (document.msExitFullScreen) {
            document.msExitFullScreen();
        }

        runCb(false);
    }

    return { element, triggerFull, exitFull };
}