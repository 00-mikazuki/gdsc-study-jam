var admin = require("firebase-admin");

var serviceAccount = require("../config/config.json");
const contactsValidation = require("../validation/validate");
const { contacts } = require("../validation/schema");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://week-3-38690-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();
const ref = db.ref('contacts');

const addContact = async (payload) => {
  // await contactsValidation(contacts, payload);
  const result = await ref.push(payload).key;
  return result;
  // const result = await ref.push(payload).key;
  // return result;
}

const getAllContactsDb = async () => {
  const result = await ref.get();
  return result.val();
}

const editContact = async (id, payload) => {
  let result;
  const isExist = await db.ref(`contacts/${id}`).get();
  if(!isExist.val()) {
    return result = 0;
  }

  result = await db.ref(`contacts/${id}`)
  .update(payload);
  return result;
}

const deleteContactDb = async (id) => {
  let result;
  const isExist = await db.ref(`contacts/${id}`).get();
  if(!isExist.val()) {
    return result = 0;
  }

  result = await db.ref(`contacts/${id}`)
  .remove();
  return result;
}

module.exports = {
  addContact, 
  getAllContactsDb,
  editContact,
  deleteContactDb,
}