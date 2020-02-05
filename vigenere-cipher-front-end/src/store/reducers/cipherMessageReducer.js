import {
    DECODE_MESSAGE_SUCCESS,
    DECRYPTING_MESSAGE_CHANGE,
    ENCODE_MESSAGE_SUCCESS,
    ENCRYPTING_MESSAGE_CHANGE, PASSWORD_CHANGE
} from "../actions/cipherActions";

const initialState = {
    encryptingMessage: '',
    decryptingMessage: '',
    password: '',
};

const cipherReducer = (state = initialState, action) => {
    switch(action.type) {
        case ENCODE_MESSAGE_SUCCESS:
            return {
                ...state,
                decryptingMessage: action.encodedMessage,
            };
        case DECODE_MESSAGE_SUCCESS:
            return {
                ...state,
                encryptingMessage: action.decodedMessage,
            };
        case ENCRYPTING_MESSAGE_CHANGE:
            return {
                ...state,
                encryptingMessage: action.message,
            };
        case DECRYPTING_MESSAGE_CHANGE:
            return {
                ...state,
                decryptingMessage: action.message,
            };
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.password,
            };
        default:
            return state;
    }
};

export default cipherReducer;
