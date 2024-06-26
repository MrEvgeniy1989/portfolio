import React from 'react'

import s from './Projects.module.scss'

import cardsImg from '../../assets/images/projects/cardsProject.webp'
import carsProject from '../../assets/images/projects/carsProject.webp'
import socialNetworkImg from '../../assets/images/projects/socialNetworkProject.webp'
import todolistImg from '../../assets/images/projects/todolistProject.webp'
import { Container } from '../../common/components/container/Container'
import { Title } from '../../common/components/title/Title'
import { Project } from './project/Project'

type ProjectType = {
  codeHref: string
  description: string
  id: number
  projectHref: string
  src: string
  title: string
}

const projectsData: ProjectType[] = [
  {
    codeHref: 'https://github.com/MrEvgeniy1989/cards',
    description:
      'The app is designed for question-and-answer card-based learning, with the ability to create your own decks of cards or use existing sets.',
    id: 4,
    projectHref: 'https://cards-for-study.vercel.app',
    src: cardsImg,
    title: 'Cards',
  },
  {
    codeHref: 'https://github.com/MrEvgeniy1989/todolist',
    description:
      'The project provides convenient management of tasks and to-do lists through an intuitive interface, allowing you to create, edit, delete and view tasks and to-do lists.',
    id: 3,
    projectHref: 'https://mrevgeniy1989.github.io/todolist/',
    src: todolistImg,
    title: 'Todolist',
  },
  {
    codeHref: 'https://github.com/MrEvgeniy1989/samurai-way-main',
    description:
      "The project is a platform where users can register, create personal profiles, view other users' profiles, add them as friends and chat.",
    id: 2,
    projectHref: 'https://mrevgeniy1989.github.io/samurai-way-main/',

    src: socialNetworkImg,
    title: 'Social network',
  },
  {
    codeHref: 'https://github.com/MrEvgeniy1989/cars-hw',
    description: 'A one-page website for car rentals.',
    id: 1,
    projectHref: 'https://mrevgeniy1989.github.io/cars-hw/',

    src: carsProject,
    title: 'CarsApp',
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
                codeHref={project.codeHref}
                description={project.description}
                key={project.id}
                projectHref={project.projectHref}
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
