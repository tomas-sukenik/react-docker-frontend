import React, { Component } from 'react';
import Keycloak from 'keycloak-js'

class PrivatePage extends Component {
    state = { keycloak: null, authenticated: false };

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');

        keycloak
            .init({ onLoad: 'login-required' })
            .then(authenticated => {
                this.setState({ keycloak: keycloak, authenticated: authenticated })
            })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) {
                return (<div>This is your private page and should not be publicly available.</div>)
            } else {
                return (<div>Unable to authenticate!</div>)
            }
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}

export default PrivatePage;