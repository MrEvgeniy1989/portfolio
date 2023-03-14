import React from 'react'

import { Title } from '../common/components/title/Title'

import cssIcon from './../assets/Icons/skills/css.svg'
import formikIcon from './../assets/Icons/skills/formik.svg'
import htmlIcon from './../assets/Icons/skills/html.svg'
import javaScriptIcon from './../assets/Icons/skills/javaScript.svg'
import reactIcon from './../assets/Icons/skills/react.svg'
import reduxToolkitIcon from './../assets/Icons/skills/reduxToolkit.svg'
import restApiIcon from './../assets/Icons/skills/restAPI.svg'
import storyBookIcon from './../assets/Icons/skills/storyBook.svg'
import typeScriptIcon from './../assets/Icons/skills/typeScript.svg'
import unitTestsIcon from './../assets/Icons/skills/unitTest.svg'
import { Skill } from './skill/Skill'
import style from './Skills.module.scss'

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={style.container}>
        <Title text={'Skills'} />
        <div className={style.skills}>
          <Skill
            imgSrc={typeScriptIcon}
            imgAltTitle={''}
            title={'TypeScript'}
            description={
              'Ab consequatur dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            imgSrc={javaScriptIcon}
            imgAltTitle={''}
            title={'JavaScript'}
            description={
              'dolor dolorum eaque exercitationem incidunt ipsam maiores nobis nulla omnis praesentium...'
            }
          />
          <Skill
            imgSrc={reactIcon}
            imgAltTitle={''}
            title={'React'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={reduxToolkitIcon}
            imgAltTitle={''}
            title={'Redux-Toolkit'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={htmlIcon}
            imgAltTitle={''}
            title={'HTML'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={cssIcon}
            imgAltTitle={''}
            title={'CSS'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={formikIcon}
            imgAltTitle={''}
            title={'Formik'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={restApiIcon}
            imgAltTitle={''}
            title={'REST API'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={storyBookIcon}
            imgAltTitle={''}
            title={'Story book'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
          <Skill
            imgSrc={unitTestsIcon}
            imgAltTitle={''}
            title={'Unit tests'}
            description={'incidunt ipsam maiores nobis nulla omnis praesentium.'}
          />
        </div>
      </div>
    </div>
  )
}
