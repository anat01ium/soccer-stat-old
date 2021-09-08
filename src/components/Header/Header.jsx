import React from 'react'
import { A } from '@patched/hookrouter'

import { MENU } from '../../routes'

import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.root}>
      <div>
        Soccer Stat
      </div>

      <p>Football data provided by the Football-Data.org API</p>
      
      <div>
        {MENU.map(({ title, link }) => (
          <A key={title} href={link}>
            {title}
          </A>
        ))}
      </div>
    </div>
  )
}

export default Header
