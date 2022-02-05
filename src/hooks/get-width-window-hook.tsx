import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface WindowWidth {
  width: number;
}

interface WindowWidthProviderProps {
  children: ReactNode;
}

const WidthWindowContext = createContext<WindowWidth>(
  {} as WindowWidth
);


export const WidthWindowProvider = ({ children }: WindowWidthProviderProps ) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  return ( 
    <WidthWindowContext.Provider value={{ width }}>
      {children}
    </WidthWindowContext.Provider>
  )

}

export const widthWindow = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(WidthWindowContext);

  if (!context) {
    throw new Error('useWidthWindow must be used within a WidthWindowProvider')
  }

  return context
}

