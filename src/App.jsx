import { useRoutes } from '@patched/hookrouter'
import routes from './routes'
import { ToastContainer } from 'react-toastify';

import Header from './components/Header/Header'

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const match = useRoutes(routes)

  return (
    <div className="uk-container">
      <Header />
      {match}
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop
        closeOnClick
      />
    </div>
  )
}

export default App;
