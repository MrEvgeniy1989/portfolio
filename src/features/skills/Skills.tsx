import React from 'react'
import { Fade } from 'react-awesome-reveal'

import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'

import style from './Skills.module.scss'

import { Title } from '../../common/components/title/Title'
import { Skill } from './skill/Skill'

type SkillType = {
  FontAwesomeIcon?: IconDefinition
  iconifyIcon?: string
  id: number
  imgAltTitle?: string
  title: string
}

const skills: SkillType[] = [
  { iconifyIcon: 'mdi:language-typescript', id: 1, title: 'TypeScript' },
  { iconifyIcon: 'fa-brands:js', id: 2, title: 'JavaScript' },
  { FontAwesomeIcon: faReact, id: 3, title: 'React' },
  { iconifyIcon: 'tabler:brand-redux', id: 4, title: 'Redux' },
  { iconifyIcon: 'tabler:brand-redux', id: 5, title: 'Redux-Toolkit' },
  { FontAwesomeIcon: faHtml5, id: 6, title: 'HTML' },
  { FontAwesomeIcon: faCss3Alt, id: 7, title: 'CSS' },
  { iconifyIcon: 'mdi:api', id: 8, title: 'REST API' },
  { iconifyIcon: 'simple-icons:storybook', id: 9, title: 'Story book' },
  { iconifyIcon: 'file-icons:test-js', id: 10, title: 'Unit tests' },
]

export const Skills = () => {
  return (
    <div className={style.skillsBlock} id={'skills'}>
      <div className={style.container}>
        <Title text={'Skills'} />

        <div className={style.skills}>
          <Fade cascade damping={0.2}>
            {skills.map(skill => {
              return (
                <Skill
                  FontAwesomeIcon={skill.FontAwesomeIcon}
                  iconifyIcon={skill.iconifyIcon}
                  key={skill.id}
                  title={skill.title}
                />
              )
            })}
          </Fade>
        </div>
      </div>
    </div>
  )
}
