import React from 'react'

import { Title } from '../common/components/title/Title'

import style from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={style.container}>
        <Title text={'Contacts'} />
        <form className={style.form}>
          <input type="text" className={style.formArea} placeholder={'Name'} />
          <input type="text" className={style.formArea} placeholder={'E-mail'} />
          <textarea className={style.messageArea} placeholder={'Message'} />
          <button type={'submit'}>Send message</button>
        </form>
      </div>
    </div>
  )
}
