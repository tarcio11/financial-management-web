import { BsCurrencyDollar }from 'react-icons/bs'
import { widthWindow } from '../../hooks/get-width-window-hook'

import { Container } from './styles'

export const Footer = () => {
  const { width } = widthWindow()

  if (width < 768) {
    return (
      <Container>
        <button>
          <BsCurrencyDollar size={30} color='#FFF'/>
        </button>
      </Container> 
    )
  } else {
    return null
  }
}