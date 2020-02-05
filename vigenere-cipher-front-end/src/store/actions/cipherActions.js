import axiosCipher from "../../axiosCipher";

export const ENCODE_MESSAGE_SUCCESS = 'ENCODE_MESSAGE_SUCCESS';
export const DECODE_MESSAGE_SUCCESS = 'DECODE_MESSAGE_SUCCESS';

export const ENCRYPTING_MESSAGE_CHANGE = 'ENCRYPTING_MESSAGE_CHANGE';
export const DECRYPTING_MESSAGE_CHANGE = 'DECRYPTING_MESSAGE_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';

export const encodeMessageChange = message => ({type: ENCRYPTING_MESSAGE_CHANGE, message});
export const decodeMessageChange = message => ({type: DECRYPTING_MESSAGE_CHANGE, message});
export const passwordChange = password => ({type: PASSWORD_CHANGE, password});

const encodeMessageSuccess = encodedMessage => ({type: ENCODE_MESSAGE_SUCCESS, encodedMessage});
const decodeMessageSuccess = decodedMessage => ({type: DECODE_MESSAGE_SUCCESS, decodedMessage});

export const encodeMessage = encodingMessage => {
    return async dispatch => {
        try {
            const encodedMessage = await axiosCipher.post('/encode', encodingMessage);
            dispatch(encodeMessageSuccess(encodedMessage.data.encoded));
        } catch(e) {
            console.error('Error while encoding');
        }
    }
};

export const decodeMessage = decodingMessage => {
    return async dispatch => {
        try {
            const decodedMessage = await axiosCipher.post('/decode', decodingMessage);
            dispatch(decodeMessageSuccess(decodedMessage.data.decoded));
        } catch(e) {
            console.error('Error while decoding');
        }
    }
};
