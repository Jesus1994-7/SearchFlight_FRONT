import axios from 'axios';

export const contactMsgRepository = {
    setContactMessage,
    getAllContactsMessage
};

async function setContactMessage(contactMsg) {
    try {
        const res = await axios.post(`contactMsg/setContact`, contactMsg);
        return res.data;
    }
    catch (error) {
        throw Error(error);
    }
};
async function getAllContactsMessage() {
    try {
        const res = await axios.get(`contactMsg/allContacts`);
        return res.data;
    }
    catch (error) {
        throw Error(error);
    }
};