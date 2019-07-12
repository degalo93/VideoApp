import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    //callback to make sure google recived the request includes my cliend id
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '206077558876-mmiesj29uu1f35lk7itnnkgmck6587f4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
              this.auth = window.gapi.auth2.getAuthInstance(); 
              this.onAuthChange ();
              this.auth.isSignedIn.listen(this.onAuthChange);
            }); 
        });
    }

//onAuthChange will display a change and show if user is signed in or not without prefreshing the page

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get() });

    };

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
