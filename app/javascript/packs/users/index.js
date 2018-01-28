import axios_on_rails from 'axios-on-rails'

axios_on_rails.post('users', { hoge: 1 }).then((res) => {
  console.log(res)
})
