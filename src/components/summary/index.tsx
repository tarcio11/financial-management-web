import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IoAddSharp } from 'react-icons/io5'

import { Container } from './styles'

export const Summary = () => {
  return (
    <Container>
      <div className='income'>
        <header>
          <AiOutlineArrowUp size={38} color='#9B9CF8' />
        </header>
        <span>
          <p>Entradas</p>
          <strong>R$21.000,00</strong>
        </span>
      </div>

      <div className='outcome'>
        <header>
          <AiOutlineArrowDown size={38} color='#FEB4C5' />
        </header>
        <span>
          <p>Saídas</p>
          <strong>R$10.000,00</strong>
        </span>
      </div>

      <div className='total stretch'>
        <header>
          <IoAddSharp size={38} color='#abe7b4' />
        </header>
        <span>
          <p>Saldo</p>
          <strong>R$15.000,00</strong>
        </span>
      </div>
    </Container>
  )
}