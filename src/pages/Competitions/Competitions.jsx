import { useState } from 'react'
import { A } from '@patched/hookrouter'

import config from '../../config'
import useData from '../../hook/useData'

const Competitions = () => {
  const { competitions } = config;
  const data = useData('competitions')
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      {data && 
        <div>
          <h1>Competitions</h1>
          <input
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="search competition..."
          />
          <ul>
            {data.competitions
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
