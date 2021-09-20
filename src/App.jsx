import { useRoutes } from '@patched/hookrouter'
import routes from './routes'

import Header from './components/Header/Header'

import './App.css';

function App() {
  const match = useRoutes(routes)

  return (
    <div className="uk-container">
      <Header />
      {match}
    </div>
  )
}

export default App;
