import React from 'react'

import s from './Projects.module.scss'

import cardsImg from '../../assets/images/projects/cardsProject.webp'
import socialNetworkImg from '../../assets/images/projects/socialNetworkProject.webp'
import todolistImg from '../../assets/images/projects/todolistProject.webp'
import { Container } from '../../common/components/container/Container'
import { Title } from '../../common/components/title/Title'
import { Project } from './project/Project'

type ProjectType = {
  description: string
  id: number
  src: string
  title: string
}

const projectsData: ProjectType[] = [
  {
    description:
      'The app is designed for question-and-answer card-based learning, with the ability to create your own decks of cards or use existing sets.',
    id: 1,
    src: cardsImg,
    title: 'Cards',
  },
  {
    description:
      'The project provides convenient management of tasks and to-do lists through an intuitive interface, allowing you to create, edit, delete and view tasks and to-do lists.',
    id: 2,
    src: todolistImg,
    title: 'Todolist',
  },
  {
    description:
      "The project is a platform where users can register, create personal profiles, view other users' profiles, add them as friends and chat.",
    id: 3,
    src: socialNetworkImg,
    title: 'Social network',
  },
]

export const Projects = () => {
  return (
    <section className={s.projectsBlock} id={'projects'}>
      <Container className={s.container}>
        <Title text={'Projects'} />
        <div className={s.projects}>
          {projectsData.map(project => {
            return (
              <Project
                description={project.description}
                key={project.id}
                src={project.src}
                title={project.title}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
