import React from 'react'

import style from './Projects.module.scss'

import socialImage from '../../assets/images/socialNetwork1.jpg'
import todoImage from '../../assets/images/todolist1.jpg'
import { Title } from '../../common/components/title/Title'
import { Project } from './project/Project'

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
    <div className={style.projectsBlock} id={'projects'}>
      <div className={style.container}>
        <Title text={'Projects'} />
        <div className={style.projects}>
          <Project
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae blanditiis cupiditate deserunt dolorem, facere,impedit iure magnam maxime molestias mollitia natus neque nisi possimus quia recusandae reiciendissaepe?'
            }
            style={todolistStyle}
            title={'Todo list'}
          />
          <Project
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores fuga, nisi non possimus veritatis!'
            }
            style={socialStyle}
            title={'Social network'}
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
