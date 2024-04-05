import React from 'react'

import s from './Projects.module.scss'

import { Title } from '../../common/components/title/Title'
import { Project } from './project/Project'

type ProjectType = {
  className: string
  description: string
  id: number
  title: string
}

const projectsData: ProjectType[] = [
  {
    className: s.cardsProject,
    description:
      'The app is designed for question-and-answer card-based learning, with the ability to create your own decks of cards or use existing sets.',
    id: 1,
    title: 'Cards',
  },
  {
    className: s.todolistProject,
    description:
      'The project provides convenient management of tasks and to-do lists through an intuitive interface, allowing you to create, edit, delete and view tasks and to-do lists.',
    id: 2,
    title: 'Todolist',
  },
  {
    className: s.socialNetworkProject,
    description:
      "The project is a platform where users can register, create personal profiles, view other users' profiles, add them as friends and chat.",
    id: 3,
    title: 'Social network',
  },
]

export const Projects = () => {
  return (
    <div className={s.projectsBlock} id={'projects'}>
      <div className={s.container}>
        <Title text={'Projects'} />
        <div className={s.projects}>
          {projectsData.map(project => {
            return (
              <Project
                className={project.className}
                description={project.description}
                key={project.id}
                title={project.title}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
