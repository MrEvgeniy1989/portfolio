import React from 'react'

import style from './Contacts.module.scss'

import { Title } from '../common/components/title/Title'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={style.container}>
        <Title text={'Contacts'} />
        <form className={style.form}>
          <input className={style.formArea} placeholder={'Name'} type={'text'} />
          <input className={style.formArea} placeholder={'E-mail'} type={'text'} />
          <textarea className={style.messageArea} placeholder={'Message'} />
          <button type={'submit'}>Send message</button>
        </form>
      </div>
    </div>
  )
}
