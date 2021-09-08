import { useState } from 'react'
import { A } from '@patched/hookrouter'

import useData from '../../hook/useData'

import s from './CompetitionTeams.module.scss'

const CompetitionTeams = ({ id }) => {
  const data = useData('competitionTeams', id)
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      {data && 
        <div>
          <h1>{data.competition.name} Teams</h1>
          <A className={s.calendarLink} href={`/competitions/${id}/matches`}>Competition Calendar</A>
          <input
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="search team..."
          />
          <ul>
            {data.teams
              .filter(({ name }) => name.toLowerCase().includes(searchValue))
              .map(({ id, name }) => <li key={id}><A href={`/teams/${id}/matches`}>{name}</A></li>)}
          </ul>
        </div>
      }
    </>
  )
}

export default CompetitionTeams
