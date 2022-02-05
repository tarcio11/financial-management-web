import { Dashboard } from './components/dashboard';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global'
import { WidthWindowProvider } from './hooks/get-width-window-hook';

function App() {
  return (
    <WidthWindowProvider>
      <Header />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </WidthWindowProvider>
  )
}

export default App;
