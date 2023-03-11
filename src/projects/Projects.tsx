import React from 'react'

import styleContainer from '../common/styles/Container.module.css'

import { Project } from './project/Project'
import style from './Projects.module.css'

export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
          <Project
            title={'Todo list'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
          />
          <Project
            title={'Social network'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
          />
          <Project
            title={'Counter'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
          />
        </div>
      </div>
    </div>
  )
}
