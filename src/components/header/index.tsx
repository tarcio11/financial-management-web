import { Container, Content } from './styles'
import { BsCurrencyDollar }from 'react-icons/bs'
import { MdOutlineNotifications }from 'react-icons/md'
import { widthWindow } from '../../hooks/get-width-window-hook'

import logo from '../../assets/logo.jpeg'

export const Header = () => {
  const { width } = widthWindow()

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
        <div>
          <span>
            <strong>Tarcio Rocha</strong>
          </span>
          <p>
            Bem-vindo!
          </p>
        </div>
      </Content>
      {width > 768 ? (
        <button>
          Nova transação
          <BsCurrencyDollar size={20} />
        </button>
      ): (
        <button>
          <MdOutlineNotifications size={40} color='#233F78'/>
        </button>
      )}
    </Container>
  )
}