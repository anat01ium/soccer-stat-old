import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'

import Loader from '../../components/Loader/Loader'

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
      {!data && <Loader />}
      {team &&
        <div className="uk-animation-fade uk-animation-fast">
          <h1>{team.name} Matches</h1>
          
          {data?.count === 0 ? <p>No matches</p> : 
            <div>
              <h4 className={s.dateFilterTitle}>Date filter</h4>
              <div className={s.dateFilter}>
                <DatePicker
                  className="uk-input"
                  locale="ru-RU"
                  dateFormat="dd.MM.y"
                  selected={startDate}
                  onChange={date => setStartDate(date)} 
                />
                <DatePicker
                  className="uk-input"
                  locale="ru-RU"
                  dateFormat="dd.MM.y"
                  selected={endDate}
                  onChange={date => setEndDate(date)} 
                />
              </div>
              
              <table className="uk-table">
                <caption></caption>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Home team</th>
                    <th>Away team</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.matches
                    .filter(({ utcDate }) => new Date(utcDate) >= startDate & new Date(utcDate) <= endDate)
                    .map(({ id,
                            utcDate,
                            status,
                            homeTeam: { name: team1 },
                            awayTeam: { name: team2 },
                            score: { fullTime: { homeTeam: team1score, awayTeam: team2score } }
                    }) => (
                      <tr key={id}>
                        <td>{new Date(utcDate).toLocaleDateString('ru-RU')}</td>
                        <td>{team1}</td>
                        <td>{team2}</td>
                        {status === 'FINISHED' && <td>{team1score}:{team2score}</td>}
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      }
    </>
  )
}

export default TeamMatches
