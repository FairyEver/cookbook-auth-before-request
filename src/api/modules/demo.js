import { find, assign, map, random } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', nickname: 'Admin' }
]

export default ({ service, mock, faker, tools }) => ({
  SYS_USER_LOGIN ({
    username = '',
    password = ''
  } = {}) {
    mock
      .onAny('/login')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
          : tools.responseError({}, '账号或密码不正确')
      })
    return service({
      url: '/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  },
  TICKET_LIST () {
    mock
      .onAny('/ticket')
      .reply(config => {
        const result = map(Array(10), () => ({
          key: faker.random.uuid(),
          value: [10, 100, 200, 500][random(0, 3)],
          type: faker.random.boolean(),
          admin: faker.name.firstName() + faker.name.lastName(),
          adminNote: faker.random.words(),
          dateTimeCreat: faker.date.past(),
          used: faker.random.boolean(),
          dateTimeUse: faker.date.past()
        }))
        return tools.responseSuccess(result)
      })
    return service({
      url: '/ticket',
      method: 'post',
      data: {}
    })
  }
})
