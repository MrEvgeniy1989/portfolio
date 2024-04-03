import React from 'react'

import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'

import style from './Skills.module.scss'

import { Title } from '../common/components/title/Title'
import { Skill } from './skill/Skill'

export const Skills = () => {
  return (
    <div className={style.skillsBlock} id={'skills'}>
      <div className={style.container}>
        <Title text={'Skills'} />
        <div className={style.skills}>
          <Skill iconifyIcon={'mdi:language-typescript'} title={'TypeScript'} />
          <Skill iconifyIcon={'fa-brands:js'} title={'JavaScript'} />
          <Skill FontAwesomeIcon={faReact} title={'React'} />
          <Skill iconifyIcon={'tabler:brand-redux'} title={'Redux'} />
          <Skill iconifyIcon={'tabler:brand-redux'} title={'Redux-Toolkit'} />
          <Skill FontAwesomeIcon={faHtml5} title={'HTML'} />
          <Skill FontAwesomeIcon={faCss3Alt} title={'CSS'} />
          <Skill iconifyIcon={'mdi:api'} title={'REST API'} />
          <Skill iconifyIcon={'simple-icons:storybook'} title={'Story book'} />
          <Skill iconifyIcon={'file-icons:test-js'} title={'Unit tests'} />
        </div>
      </div>
    </div>
  )
}
