import {Component} from 'react'
import Loader from 'react-loader-spinner'

import UserItem from '../UserItem'
import './index.css'

class Home extends Component {
  state = {usersList: [], isLoading: true}

  renderLoadingView = () => (
    <div className="bg-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderUserData = () => {
    const {usersList} = this.state

    return (
      <ul className="user-list-container">
        {usersList.map(eachUser => (
          <UserItem key={eachUser.id} userData={eachUser} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="container">
        <button type="button" className="logout-button">
          Logout
        </button>
        {isLoading ? this.renderLoadingView() : this.renderUserData()}
      </div>
    )
  }
}

export default Home
