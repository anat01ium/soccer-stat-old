import { useState } from 'react'
import { A } from '@patched/hookrouter'

import Loader from '../../components/Loader/Loader'

import useData from '../../hook/useData'

import s from './CompetitionTeams.module.scss'

const CompetitionTeams = ({ id }) => {
  const data = useData('competitionTeams', id)
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      {!data && <Loader />}
      {data && 
        <div className="uk-animation-fade uk-animation-fast">
          <h1>{data.competition.name} Teams</h1>
          <A className={s.calendarLink} href={`/competitions/${id}/matches`}>Competition Calendar</A>
          <form className="uk-search uk-search-default">
            <span uk-search-icon=""></span>
            <input
              className="uk-search-input"
              type="text"
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search team..."
            />
          </form>
          <ul>
            {data.teams
              .filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
              .map(({ id, name }) => <li key={id}><A href={`/teams/${id}/matches`}>{name}</A></li>)}
          </ul>
        </div>
      }
    </>
  )
}

export default CompetitionTeams
