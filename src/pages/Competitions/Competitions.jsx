import { useState } from 'react'
import { A } from '@patched/hookrouter'

import Loader from '../../components/Loader/Loader'

import config from '../../config'
import useData from '../../hook/useData'

const Competitions = () => {
  const { competitions } = config;
  const data = useData('competitions')
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      {!data && <Loader />}
      {data && 
        <div className="uk-animation-fade uk-animation-fast">
          <h1>Competitions</h1>
          <form className="uk-search uk-search-default">
            <span uk-search-icon=""></span>
            <input
              className="uk-search-input"
              type="search"
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search competition..."
            />
          </form>
          <ul>
            {data?.competitions
              .filter(({ code }) => competitions.includes(code))
              .filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
              .map(({ id, name }) => <li key={id}><A href={`/competitions/${id}/teams`}>{name}</A></li>)}
          </ul>
        </div>
      }
    </>
  )
}

export default Competitions
