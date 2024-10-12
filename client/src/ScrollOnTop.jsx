import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollOnTop(props) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    },[Location]);
  return <>{props.children}</>
}

export default ScrollOnTop
