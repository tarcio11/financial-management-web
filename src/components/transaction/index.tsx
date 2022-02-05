import { widthWindow } from '../../hooks/get-width-window-hook'
import { Container } from './styles'

export const Transaction = () => {
  const { width } = widthWindow()

  return (
    <Container minWidth={width < 768 ? true : false}>
      <h1>Transações</h1>

      <div>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
      <div>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
      <div>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
      <div>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
      <div>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
      <div className='margin'>
        <div>
          <header>
            <img src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" alt="icon" />
          </header>
          <div>
            <strong>Farmácia São Félix</strong>
            <p>04 Fevereiro 2022</p>
          </div>
        </div>
        <strong>R$22,00</strong>
      </div>
    </Container>
  )
}