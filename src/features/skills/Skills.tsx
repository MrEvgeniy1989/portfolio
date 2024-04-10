import React, { ReactNode } from 'react'
import { Fade } from 'react-awesome-reveal'

import s from './Skills.module.scss'

import { ApiIcon } from '../../assets/icons/skills/apiIcon'
import { CssIcon } from '../../assets/icons/skills/cssIcon'
import { GithubIcon } from '../../assets/icons/skills/githubIcon'
import { HtmlIcon } from '../../assets/icons/skills/htmlIcon'
import { JavaScriptIcon } from '../../assets/icons/skills/javascriptIcon'
import { ReactIcon } from '../../assets/icons/skills/reactIcon'
import { ReduxIcon } from '../../assets/icons/skills/reduxIcon'
import { StorybookIcon } from '../../assets/icons/skills/storybookIcon'
import { TypescriptIcon } from '../../assets/icons/skills/typescriptIcon'
import { Container } from '../../common/components/container/Container'
import { Title } from '../../common/components/title/Title'
import { Skill } from './skill/Skill'

type SkillType = {
  icon: ReactNode
  id: number
  imgAltTitle?: string
  title: string
}

const skills: SkillType[] = [
  { icon: <TypescriptIcon />, id: 1, title: 'TypeScript' },
  { icon: <JavaScriptIcon />, id: 2, title: 'JavaScript' },
  { icon: <ReactIcon />, id: 3, title: 'React' },
  { icon: <ReduxIcon />, id: 4, title: 'Redux' },
  { icon: <ReduxIcon />, id: 5, title: 'Redux-Toolkit' },
  { icon: <HtmlIcon />, id: 6, title: 'HTML' },
  { icon: <CssIcon />, id: 7, title: 'CSS' },
  { icon: <ApiIcon />, id: 8, title: 'REST API' },
  { icon: <StorybookIcon />, id: 9, title: 'Story book' },
  { icon: <GithubIcon />, id: 10, title: 'GitHub' },
]

export const Skills = () => {
  return (
    <section className={s.skillsBlock} id={'skills'}>
      <Container className={s.container}>
        <Title text={'Skills'} />

        <div className={s.skills}>
          <Fade cascade damping={0.2}>
            {skills.map(skill => {
              return <Skill icon={skill.icon} key={skill.id} title={skill.title} />
            })}
          </Fade>
        </div>
      </Container>
    </section>
  )
}
