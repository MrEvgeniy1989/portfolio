import React from 'react'

import s from './Projects.module.scss'

import { Title } from '../../common/components/title/Title'
import { Project } from './project/Project'

export const Projects = () => {
  return (
    <div className={s.projectsBlock} id={'projects'}>
      <div className={s.container}>
        <Title text={'Projects'} />
        <div className={s.projects}>
          <Project
            className={s.cardsProject}
            description={
              'The app is designed for question-and-answer card-based learning, with the ability to create your own decks of cards or use existing sets.'
            }
            title={'Cards'}
          />
          <Project
            className={s.todolistProject}
            description={
              'The project provides convenient management of tasks and to-do lists through an intuitive interface, allowing you to create, edit, delete and view tasks and to-do lists.'
            }
            title={'Todolist'}
          />
          <Project
            className={s.socialNetworkProject}
            description={
              "The project is a platform where users can register, create personal profiles, view other users' profiles, add them as friends and chat."
            }
            title={'Social network'}
          />
        </div>
      </div>
    </div>
  )
}
