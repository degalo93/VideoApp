import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    //callback to make sure google recived the request 
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '206077558876-mmiesj29uu1f35lk7itnnkgmck6587f4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
              this.auth = window.gapi.auth2.getAuthInstance(); 
              this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            }); 
        });
    }
    renderAuthButton () {
        if (this.state.isSignedIn === null ){
            return <div> Don't know if I am signed in </div>
        } else if (this.state.isSignedIn) {
            return <div> I am signed in  </div>
        } else {
            return <div> I am not signed in </div>
        }
    }
    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;
