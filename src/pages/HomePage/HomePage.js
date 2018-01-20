import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import './HomePage.css'

@inject('AppStore')
@observer
export default class HomePage extends Component {

  logout = () => {
    this.props.AppStore.logoutUser()
      .then(_ => this.props.history.push('/login'))
  }

  render() {
    const { user, rate } = this.props.AppStore
    return (
      <div className="homepage-container">
        <section className="hero is-info is-bold is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <img src="img/bitcoin.png" />
              </h1>
              <h1 className="title">
                Hello {user.name}!
              </h1>
              <h2 className="subtitle">
                You have {user.coins} Bitcoins
              </h2>
              <p className="homepage-status">They value is ${(user.coins / rate).toFixed(2)}</p>
              <p className="homepage-info">Current Bitcoin-USD Rate is: {(1 / rate).toFixed(2)}</p>
              <div className="homepage-footer">
                <p className="homepage-logout">not {user.name}?</p>
                <button type="button" className="action-btn" onClick={this.logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}