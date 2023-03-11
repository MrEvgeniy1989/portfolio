import React from 'react'

import styleContainer from '../common/styles/Container.module.css'

import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Contacts</h2>

        <form className={style.contactsForm}>
          <input type="text" />
          <input type="text" />
          <textarea></textarea>
          <button type={'reset'}>Отправить</button>
        </form>
      </div>
    </div>
  )
}
