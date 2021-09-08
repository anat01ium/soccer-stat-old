const config = {
  uri: {
    scheme: 'https',
    host: 'api.football-data.org',
    path: {
      competitions: '/v2/competitions',
      competitionTeams: '/v2/competitions/{id}/teams',
      competitionMatches: '/v2/competitions/{id}/matches',
      team: '/v2/teams/{id}',
      teamMatches: '/v2/teams/{id}/matches/',
    },
  },
  options: {
    headers: {
      'X-Auth-Token': 'fe98ac14476a499cb03b42776ced72b7',
    },
  },
  competitions: ['WC', 'CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'EC', 'SA', 'PL', 'CLI'],
}

export default config
