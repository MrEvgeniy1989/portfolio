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
          <Skill
            description={
              'Ab consequatur dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
            iconifyIcon={'mdi:language-typescript'}
            title={'TypeScript'}
          />
          <Skill
            description={
              'dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
            iconifyIcon={'fa-brands:js'}
            title={'JavaScript'}
          />
          <Skill
            FontAwesomeIcon={faReact}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            title={'React'}
          />
          <Skill
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            iconifyIcon={'tabler:brand-redux'}
            title={'Redux'}
          />
          <Skill
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            iconifyIcon={'tabler:brand-redux'}
            title={'Redux-Toolkit'}
          />
          <Skill
            FontAwesomeIcon={faHtml5}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            title={'HTML'}
          />
          <Skill
            FontAwesomeIcon={faCss3Alt}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            title={'CSS'}
          />
          <Skill
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            iconifyIcon={'mdi:api'}
            title={'REST API'}
          />
          <Skill
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            iconifyIcon={'simple-icons:storybook'}
            title={'Story book'}
          />
          <Skill
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
            iconifyIcon={'file-icons:test-js'}
            title={'Unit tests'}
          />
        </div>
      </div>
    </div>
  )
}
