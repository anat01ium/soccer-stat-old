import { useRoutes } from '@patched/hookrouter'
import routes from './routes'

import Header from './components/Header/Header'

import './App.css';

function App() {
  const match = useRoutes(routes)

  return (
    <>
      <Header />
      {match}
    </>
  )
}

export default App;
