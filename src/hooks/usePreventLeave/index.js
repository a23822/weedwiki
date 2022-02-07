import React from 'react';
import { kMaxLength } from 'buffer';

// 페이지 나가기 전 alert
export const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";

    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
}