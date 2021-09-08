import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'

import useData from '../../hook/useData'

import 'react-datepicker/dist/react-datepicker.css'
import s from './CompetitionMatches.module.scss'

const CompetitionMatches = ({ id }) => {
  const data = useData('competitionMatches', id)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  useEffect(() => {
    if (data) {
      setStartDate(new Date(data.matches[0].utcDate))
      setEndDate(new Date(data.matches[data.matches.length - 1].utcDate))
    }
  }, [data])

  return (
    <>
      {data &&
        <div>
          <h1>{data.competition.name} Matches</h1>

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
            {data.matches
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
        </div>
      }
    </>
  )
}

export default CompetitionMatches
