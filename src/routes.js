import CompetitionsPage from './pages/Competitions/Competitions'
import CompetitionTeamsPage from './pages/CompetitionTeams/CompetitionTeams'
import CompetitionMatchesPage from './pages/CompetitionMatches/CompetitionMatches'
import TeamMatchesPage from './pages/TeamMatches/TeamMatches'

export const MENU = [
  {
    title: 'Competitions',
    link: '/competitions',
    component: () => <CompetitionsPage />,
  },
]

export const OTHER_ROUTES = [
  {
    link: '/',
    component: () => <CompetitionsPage />,
  },
  {
    link: '/competitions/:id/teams',
    component: ({id}) => <CompetitionTeamsPage id={id} />,
  },
  {
    link: '/competitions/:id/matches',
    component: ({id}) => <CompetitionMatchesPage id={id} />,
  },
  {
    link: '/teams/:id/matches',
    component: ({id}) => <TeamMatchesPage id={id} />,
  },
]

const routes = [...MENU, ...OTHER_ROUTES].reduce((acc, item) => {
  acc[item.link] = item.component
  return acc
}, {})

export default routes
