import {showMessage} from 'react-native-flash-message'

export const showError = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: 'salmon'
    });
};

export const showSuccess = (message) => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: 'green'
    });
};
