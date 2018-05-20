import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
} from 'react-native';
import { Form, Item, Input, Label, Container, InputGroup, Button, Icon } from 'native-base';
import { connect } from 'react-redux'; // connect redux "reducers" and "actions" with component
import { loginUser, loggedSuccess } from './../actions/AuthActions'
import { AsyncStorage } from 'react-native';

class FormComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('user-info')
            .then(user => {
                if (user) {
                    const userObject = JSON.parse(user);
                    // import user in redux store
                    this.props.loggedSuccess(userObject);
                    this.props.isLogged(true);
                }

            });
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.user.username){
    //         this.props.isLogged(true);
    //     }
    //     else{
    //         this.props.isLogged(false);
    //     }
    // }

    navigateHome = () => {
        const username = this.state.username;
        const password = this.state.password;
        this.props.loginUser({ username, password }); //use 'loginUser' action in AuthActions
    }

    render() {
        return (

            <View style={styles.container}>
                <Form>
                    <InputGroup borderType='underline' >
                        <Input
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="white"
                            onChangeText={(name) => {
                                this.setState({ username: name })
                            }} />
                    </InputGroup>
                    <InputGroup borderType='underline'>
                        <Input
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(pass) => {
                                this.setState({ password: pass })
                            }} />
                    </InputGroup>
                </Form>

                <Button
                    
                    style={styles.loginButton}
                    onPress={this.navigateHome}>
                    <Icon name="arrow-forward" style={styles.iconLogin} />
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        marginLeft: '10%',
        marginTop: 20,
    },
    input: {
        height: 40,
        color: '#FFFFFF'
    },
    loginButton: {
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 50,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        marginLeft: '45%',
        marginTop: 40,
    },
    iconLogin: {
        color: '#33c5d4'
    }
});

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { loginUser, loggedSuccess })(FormComponent);  //wrap component to connect redux actions 