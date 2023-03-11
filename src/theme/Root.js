import React, {useEffect, useState} from 'react';
import {PythonProvider} from "react-py";

export default function Root({children}) {
    const [isMobile, setIsMobile] = useState()
    useEffect(() => {
        setIsMobile(
            !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        )
    }, [])
    return (
        isMobile === undefined ? (
            <>{children}</>
        ) : (
            // It is best to keep lazy on if you plan to have a lot of code blocks per page
            <PythonProvider lazy={true} terminateOnCompletion={isMobile}>
                {children}
            </PythonProvider>
        )
    )
}
