import { Summary } from "../summary"
import { Transaction } from "../transaction"

import { Container } from './styles'

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <Transaction />
    </Container>
  )
}