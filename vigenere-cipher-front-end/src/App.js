import React, {Fragment} from 'react';
import {Button, Container, Input} from "reactstrap";
import {connect} from "react-redux";
import {
    decodeMessage,
    decodeMessageChange,
    encodeMessage,
    encodeMessageChange,
    passwordChange
} from "./store/actions/cipherActions";

const App = props => {
    const postToEncode = () => {
        if(props.encryptingMessage && props.password){
            props.encodeMessage({password: props.password.replace(/\s+/g, ''), message: props.encryptingMessage});
        } else{
            alert('Your message or password is empty')
        }
    };
    const postToDecode = () => {
        if(props.decryptingMessage && props.password){
            props.decodeMessage({password: props.password.replace(/\s+/g, ''), message: props.decryptingMessage});
        } else{
            alert('Your message or password is empty');
        }
    };
    return (
        <Fragment>
            <Container className='row mt-5 mx-auto'>
                <div className="col-5">
                    <Input value={props.encryptingMessage} placeholder="Decoded message" className='h-100 border border-primary text-primary' onChange={props.onEncodedChange}/>
                </div>
                <div className="col-2 text-center">
                    <Button color='primary' onClick={postToEncode}>encode</Button>
                    <Input value={props.password} placeholder='password' className='my-3 border border-primary text-primary' onChange={props.onPasswordChange}/>
                    <Button color='primary' onClick={postToDecode}>decode</Button>
                </div>
                <div className="col-5">
                    <Input value={props.decryptingMessage} placeholder='Encoded message' className='h-100 border border-primary text-primary' onChange={props.onDecodedChange}/>
                </div>
            </Container>
        </Fragment>
    );
};


const mapStateToProps = state => ({
    encryptingMessage: state.encryptingMessage,
    decryptingMessage: state.decryptingMessage,
    password: state.password,
});
const mapDispatchToProps = dispatch => ({
    encodeMessage: message => dispatch(encodeMessage(message)),
    decodeMessage: message => dispatch(decodeMessage(message)),
    onEncodedChange: event => dispatch(encodeMessageChange(event.target.value)),
    onDecodedChange: event => dispatch(decodeMessageChange(event.target.value)),
    onPasswordChange: event => dispatch(passwordChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
