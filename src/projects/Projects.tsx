import React from 'react'

import socialImage from '../assets/images/socialNetwork1.jpg'
import todoImage from '../assets/images/todolist1.jpg'
import { Title } from '../common/components/title/Title'

import { Project } from './project/Project'
import style from './Projects.module.scss'

export const Projects = () => {
  const todolistStyle = {
    backgroundImage: `url(${todoImage})`,
  }
  const socialStyle = {
    backgroundImage: `url(${socialImage})`,
  }
  // const counterStyle = {
  //   backgroundImage: `url(${imgUrl})`,
  // }

  return (
    <div className={style.projectsBlock}>
      <div className={style.container}>
        <Title text={'Projects'} />
        <div className={style.projects}>
          <Project
            style={todolistStyle}
            title={'Todo list'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae blanditiis cupiditate deserunt dolorem, facere,impedit iure magnam maxime molestias mollitia natus neque nisi possimus quia recusandae reiciendissaepe?'
            }
          />
          <Project
            style={socialStyle}
            title={'Social network'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
          />
          {/*<Project
            title={'Counter'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
          />*/}
        </div>
      </div>
    </div>
  )
}
