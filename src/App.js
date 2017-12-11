import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCTN56CxAlUOwTTXbYJNS2nMM1Gcyvzfjg",
            authDomain: "react-native-auth-25e83.firebaseapp.com",
            databaseURL: "https://react-native-auth-25e83.firebaseio.com",
            projectId: "react-native-auth-25e83",
            storageBucket: "react-native-auth-25e83.appspot.com",
            messagingSenderId: "1092612319986"
        };
        firebase.initializeApp(config);
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        )
    }
}

export default App;