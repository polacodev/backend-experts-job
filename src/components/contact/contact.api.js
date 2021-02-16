/* eslint-disable no-underscore-dangle */
import CONTACT from './contact.model';

export const getContactsAPI = async () => {
  try {
    return await CONTACT.find();
  } catch (error) {
    return error;
  }
};

export const getContactsByUserIdAPI = async ({ _id }) => {
  try {
    return await CONTACT.find({ user_id: _id });
  } catch (error) {
    return error;
  }
};

export const addContactAPI = async ({ contact }) => {
  try {
    const newContact = new CONTACT({
      name: contact.name,
      user_id: contact._id,
      email: contact.email,
      cellphone: contact.cellphone,
      workarea: contact.workarea,
      status: contact.status,
      description: contact.description,
      knowledge: contact.knowledge,
    });
    return await newContact.save();
  } catch (error) {
    return error;
  }
};

export const updateContactAPI = async ({ _id, contact }) => {
  try {
    return await CONTACT.findByIdAndUpdate(_id, contact, { new: true });
  } catch (error) {
    return error;
  }
};

export const deleteContactAPI = async ({ _id }) => {
  try {
    return await CONTACT.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
};
