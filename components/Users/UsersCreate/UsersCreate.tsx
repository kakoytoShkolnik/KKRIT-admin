import React from 'react'
import { Create, PasswordInput, required } from 'react-admin'

import { UsersForm } from '../UsersForm/UsersForm'

export const UsersCreate = () => (
  <Create>
    <UsersForm
      passwordComponent={
        <PasswordInput validate={[required()]} resettable source={'password'} />
      }
    />
  </Create>
)
