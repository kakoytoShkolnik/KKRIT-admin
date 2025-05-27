import { Admin, Resource } from 'react-admin'
import { authProvider } from './authProvider'
import dataProvider from './dataProvider'
import {
  ACCESSORIES_SOURCE_NAME,
  CLOTH_SOURCE_NAME,
  OFFICE_SOURCE_NAME,
  SOUVENIRS_SOURCE_NAME,
  USERS_SOURCE_NAME,
} from '../constants/sourceNames'
import { UsersList } from '../components/Users/UsersList/UsersList'
import { UsersShow } from '../components/Users/UsersShow/UsersShow'
import { UsersCreate } from '../components/Users/UsersCreate/UsersCreate'
import { UsersEdit } from '../components/Users/UsersEdit/UsersEdit'
import { GoodsList } from '../components/GoodsList/GoodsList'
import { ClothCreate } from '../components/Cloth/ClothCreate/ClothCreate'
import { ProductShow } from '../components/ProductShow/ProductShow'
import { ClothEdit } from '../components/Cloth/ClothEdit/ClothEdit'
import { AccessoryCreate } from '../components/Accessory/AccessoryCreate/AccessoryCreate'
import { AccessoryEdit } from '../components/Accessory/AccessoryEdit/AccessoryEdit'
import { OfficeCreate } from '../components/Office/OfficeCreate/OfficeCreate'
import { OfficeEdit } from '../components/Office/OfficeEdit/OfficeEdit'
import { SouvenirsCreate } from '../components/Souvenirs/SouvenirsCreate/SouvenirsCreate'
import { SouvenirsEdit } from '../components/Souvenirs/SouvenirsEdit/SouvenirsEdit'

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name={USERS_SOURCE_NAME}
      list={UsersList}
      show={UsersShow}
      create={UsersCreate}
      edit={UsersEdit}
    />

    <Resource
      name={CLOTH_SOURCE_NAME}
      list={GoodsList}
      create={ClothCreate}
      show={ProductShow}
      edit={ClothEdit}
    />

    <Resource
      name={ACCESSORIES_SOURCE_NAME}
      list={GoodsList}
      create={AccessoryCreate}
      show={ProductShow}
      edit={AccessoryEdit}
    />
    <Resource
      name={OFFICE_SOURCE_NAME}
      list={GoodsList}
      create={OfficeCreate}
      show={ProductShow}
      edit={OfficeEdit}
    />

    <Resource
      name={SOUVENIRS_SOURCE_NAME}
      list={GoodsList}
      create={SouvenirsCreate}
      show={ProductShow}
      edit={SouvenirsEdit}
    />
  </Admin>
)
