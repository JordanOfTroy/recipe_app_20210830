import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import history from '../History'
const {REACT_APP_CLIENT_ID} = process.env

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: REACT_APP_CLIENT_ID,
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const userId = this.auth.currentUser.get().getId()
            this.props.signIn(userId)
            history.push(`/home/${userId}`)
        } else {
            this.props.signOut()
            history.push('/')
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
       this.auth.signOut() 
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon' />
                    Sign out
                </button>
            )
        } else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)