import { useEffect, useState } from 'react'

import config from '../config'

const useData = (pathname, id) => {
  const [data, setData] = useState(null)

  const { uri: { scheme, host, path }, options } = config
  const endpoint = id ? path[pathname].replace('{id}', `${id}`) : path[pathname]
  const url = `${scheme}://${host}${endpoint}`

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetch(url, options).then(res => res.json()).catch(error => alert(`Error: ${error} \n\nДля получения информации сайт использует бесплатный API с ограниченной частотой запросов. Попробуйте обновить страницу через 30 секунд.`))
      setData(newData)
    };

    fetchData();
  // eslint-disable-next-line
  }, [])

  return data
}

export default useData
