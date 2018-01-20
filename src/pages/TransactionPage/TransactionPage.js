import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import TransactionPreview from '../../cmps/TransactionPreview/TransactionPreview.js'
import './TransactionPage.css'

@inject('AppStore') @observer
export default class TransactionPage extends Component {
    render() {
        const { transactions } = this.props.AppStore
        // console.log({transactions})

        return (
            <section className="trans-page">
                {transactions.length > 0 ? (
                    <div>
                        <section class="hero is-medium is-primary is-bold">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Your Transactions
                                    </h1>
                                </div>
                            </div>
                        </section>
                        <ul className="content panel">
                            {transactions.map(transaction =>
                                <TransactionPreview transaction={transaction} key={transaction.at}></TransactionPreview>)}
                        </ul>
                    </div>
                ) : (
                        <section className="hero is-medium is-fullheight is-primary is-bold">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        No Transactions To Display
                                    </h1>
                                </div>
                            </div>
                        </section>
                    )}
            </section>
        )
    }
}