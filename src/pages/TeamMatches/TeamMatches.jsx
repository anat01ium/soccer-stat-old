import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'

import useData from '../../hook/useData'

import 'react-datepicker/dist/react-datepicker.css'
import s from './TeamMatches.module.scss'

const TeamMatches = ({ id }) => {
  const team = useData('team', id)
  const data = useData('teamMatches', id)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  useEffect(() => {
    if (data) {
      if (data.matches.length !== 0) {
        setStartDate(new Date(data.matches[0].utcDate))
        setEndDate(new Date(data.matches[data.matches.length - 1].utcDate))
      }
    }
  }, [data])

  return (
    <>
      {team &&
        <div>
          <h1>{team.name} Matches</h1>
          
          <h4 className={s.dateFilterTitle}>Date filter</h4>
          <div className={s.dateFilter}>
            <DatePicker 
              selected={startDate}
              onChange={date => setStartDate(date)} 
            />
            <DatePicker 
              selected={endDate}
              onChange={date => setEndDate(date)} 
            />
          </div>
          
          <ul>
            {data?.matches
              .filter(({ utcDate }) => new Date(utcDate) >= startDate & new Date(utcDate) <= endDate)
              .map(({ id,
                      utcDate,
                      status,
                      homeTeam: { name: team1 },
                      awayTeam: { name: team2 },
                      score: { fullTime: { homeTeam: team1score, awayTeam: team2score } }
              }) => (
                <li key={id}>
                  {new Date(utcDate).toLocaleDateString()} {team1} - {team2} {status === 'FINISHED' && `(${team1score}:${team2score})`}
                </li>
              ))
            }
          </ul>
          
          {data?.count === 0 && <p>No matches</p>}
        </div>
      }
    </>
  )
}

export default TeamMatches
