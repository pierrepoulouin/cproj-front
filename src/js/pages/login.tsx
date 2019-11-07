import * as React from 'react'

import { Redirect } from 'react-router-dom'

//Typescript
interface Props {
  title: string
}

//Typescript
interface State {
  username: string
  password: string
  user: object
  userIsDefined: boolean
  grant_type: string
  access_token: string
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Dom',
      password: '123*',
      user: {},
      userIsDefined: false,
      grant_type: 'password',
      access_token: 'null',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // window.localStorage.clear();
  }

  handleSubmit(event) {
    event.preventDefault()

    //   fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(data => {
    //     data.json().then(results => {
    //       this.setState({
    //         user: results[0],
    //         userIsDefined: true,
    //       })

    //       window.localStorage.setItem('user', results[0])
    //     })
    //   })
    // }
    fetch('http://localhost:9090/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'username=' +
        this.state.username +
        '&password=' +
        this.state.password +
        '&grant_type=' +
        this.state.grant_type +
        '',
      credentials: 'include',
    }).then(data => {
      data.json().then(results => {
        if (results.access_token) {
          this.setState({
            access_token: results.access_token,
            userIsDefined: true,
          })

          window.localStorage.setItem('access_token', this.state.access_token)
        }
      })
    })
  }
  render() {
    // if (this.state.userIsDefined) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: '/',
    //       }}
    //     />
    //   )
    // }

    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>email :</label>
          <input name="username" />
          <label>Password :</label>
          <input name="password" />
          <button>Se connecter</button>
        </form>
      </React.Fragment>
    )
  }
}

export default Login
