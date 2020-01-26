import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {Button} from '@material-ui/core';
import 'typeface-roboto';

/* Query sending user Information to server */
const SIGNIN_QUERY = gql`
        mutation ($googleId: String!){
          signInWithGoogle(googleId: $googleId){
            success
            message
            token
            user{
              firstName
              lastName
            }
          }
        }`;

class LoginFormGoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      googleId: '',
    };
  }

  // Google login fail callback function
  responseFail = (err) => {
    return (
        <Alert severity="error">Response failed from google login!</Alert>
    );
    // TODO(Myounghee): Make alert function
  };

  /**
   * After check member from server, setState and Reaction
   * @param {boolean} isSuccess
   * @param {string} token
   */
  changeIsMember(isSuccess, token) {
    if (isSuccess) {
      this.setState({isMember: true});
      // Store user token to localStorage
      // TODO(Myounghee): Refactor data stored to localStorage
      localStorage.setItem('token', token);
    } else {
      // TODO(Myounghee): Implement processing signin failure
    }
  }

  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if (this.state.isMember)
      return this.props.history.push('/');
    else {
      // No user information in our db.
      return this.props.history.push('/signup');
    }
  };

  // Social login button and send googleId received from google to server using mutation component.
  render() {
    return (
        <div>
          <Mutation mutation={SIGNIN_QUERY}
                    variables={{googleId: this.state.googleId}}
                    onCompleted={
                      (data) => {
                        this.changeIsMember(
                            /* isSucess= */ data.signInWithGoogle.success,
                            /* token= */ data.signInWithGoogle.token);
                        this.redirect();
                      }}
                    onError={
                      (error) => {
                        // Implement query error processing
                        console.log(error);
                      }
                    }>
            {(execute_mutation) => {
              {/* Google Login Button */
              }
              return (
                  <GoogleLogin
                      onSuccess={(res) => {
                  import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {Button} from '@material-ui/core';
import 'typeface-roboto';

/* Query sending user Information to server */
const SIGNIN_QUERY = gql`
        mutation ($googleId: String!){
          signInWithGoogle(googleId: $googleId){
            success
            message
            token
            user{
              firstName
              lastName
            }
          }
        }`;

class LoginFormGoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      googleId: '',
    };
  }

  // Google login fail callback function
  responseFail = (err) => {
    return (
        <Alert severity="error">Response failed from google login!</Alert>
    );
    // TODO(Myounghee): Make alert function
  };

  /**
   * After check member from server, setState and Reaction
   * @param {boolean} isSuccess
   * @param {string} token
   */
  changeIsMember(isSuccess, token) {
    if (isSuccess) {
      this.setState({isMember: true});
      // Store user token to localStorage
      // TODO(Myounghee): Refactor data stored to localStorage
      localStorage.setItem('token', token);
    } else {
      // TODO(Myounghee): Implement processing signin failure
    }
  }

  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if (this.state.isMember)
      return this.props.history.push('/');
    else {
      // No user information in our db.
      return this.props.history.push('/signup')
    }
  };

  // Social login button and send googleId received from google to server using mutation component.
  render() {
    return (
        <div>
          <Mutation mutation={SIGNIN_QUERY}
                    variables={{googleId: this.state.googleId}}
                    onCompleted={
                      (data) => {
                        this.changeIsMember(
                            /* isSucess= */ data.signInWithGoogle.success,
                            /* token= */ data.signInWithGoogle.token);
                        this.redirect();
                      }}
                    onError={
                      (error) => {
                        // Implement query error processing
                        console.log(error);
                      }
                    }>
            {(execute_mutation) => {
              {/* Google Login Button */
              }
              return (
                  <GoogleLogin
                      onSuccess={(res) => {
                        this.setState({
                          googleId: res.profileObj.googleId,
                        }, execute_mutation);
                      }}
                      onFailure={this.responseFail}
                      clientId={clientId} // Our client ID
                  >
                    <p style={{
                      width: '228px', height: '28px',
                      fontWeight: 'bold', fontStretch: 'normal',
                      li    console.log('bye');neHeight: '30px',
                      color: '#4a4a4a', fontFamily: 'Roboto', marginBottom: '0',
                    }}>
                      Sign in with Google
                    </p>
                  </GoogleLogin>

              );
            }
            }
          </Mutation>
        </div>);
  }
}

LoginFormGoogle.propTypes = {};

export default withRouter(LoginFormGoogle);
      this.setState({
                          googleId: res.profileObj.googleId,
                        }, execute_mutation);
                      }}
                      onFailure={this.responseFail}
                      clientId={clientId} // Our client ID
                  >
                    <p style={{
                      width: '228px', height: '28px',
                      fontWeight: 'bold', fontStretch: 'normal',
                      li    console.log('bye');neHeight: '30px',
                      color: '#4a4a4a', fontFamily: 'Roboto', marginBottom: '0',
                    }}>
                      Sign in with Google
                    </p>
                  </GoogleLogin>

              );
            }
            }
          </Mutation>
        </div>);
  }
}

LoginFormGoogle.propTypes = {};

export default withRouter(LoginFormGoogle);
