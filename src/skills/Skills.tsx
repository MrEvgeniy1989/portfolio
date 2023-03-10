import React from 'react'

import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './skill/Skill'
import style from './Skills.module.css'

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill
            title={'Js'}
            description={
              'Ab consequatur dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            title={'Css'}
            description={
              'dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            title={'React'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
        </div>
      </div>
    </div>
  )
}
