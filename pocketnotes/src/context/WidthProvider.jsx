import React, { useEffect, useState } from 'react'
import WidthContext from './widthContext';


// screenWidth state is passed across diffrent component
export default function WidthProvider({children}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize" ,()=>{
            setScreenWidth(window.innerWidth);
        })

        //clean up
        return ()=>{
            window.removeEventListener("resize",()=>{
                setScreenWidth(window.innerWidth)
            });
        }
    } ,[])
  return <WidthContext value={screenWidth}>
    {children}
  </WidthContext>
}
