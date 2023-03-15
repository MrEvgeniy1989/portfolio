import React from 'react'

import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact'

import { Title } from '../common/components/title/Title'

import { Skill } from './skill/Skill'
import style from './Skills.module.scss'

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={style.container}>
        <Title text={'Skills'} />
        <div className={style.skills}>
          <Skill
            iconifyIcon={'mdi:language-typescript'}
            title={'TypeScript'}
            description={
              'Ab consequatur dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            iconifyIcon={'fa-brands:js'}
            title={'JavaScript'}
            description={
              'dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            FontAwesomeIcon={faReact}
            title={'React'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            iconifyIcon={'tabler:brand-redux'}
            title={'Redux'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            iconifyIcon={'tabler:brand-redux'}
            title={'Redux-Toolkit'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            FontAwesomeIcon={faHtml5}
            title={'HTML'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            FontAwesomeIcon={faCss3Alt}
            title={'CSS'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            iconifyIcon={'mdi:api'}
            title={'REST API'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            iconifyIcon={'simple-icons:storybook'}
            title={'Story book'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            iconifyIcon={'file-icons:test-js'}
            title={'Unit tests'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
        </div>
      </div>
    </div>
  )
}
