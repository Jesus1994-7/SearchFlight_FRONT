import { contactMsgRepository } from '../repositories/contactMsgRepository.js';

export const contactMsgService = {
    setContactMessage,
    getAllContactsMessage
};

function setContactMessage(contactMsg) {

    contactMsgRepository.setContactMessage(contactMsg)
        .then(res => { })
        .catch(error => { console.log(error) });
};
function getAllContactsMessage() {
    let result;

    contactMsgRepository.getAllContactsMessage()
        .then(res => { result = res; })
        .catch(error => { console.log(error) });

    return result;
};