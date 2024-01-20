const { 
  addContact, 
  getAllContactsDb, 
  editContact,
  deleteContactDb
} = require("../service/service")

const postContact = async (req, res) => {
  const result = await addContact(req.body);
  res
  .status(201)
  .json({
    message: 'Contact berhasil dibuat',
    id: result,
  });
}

const getAllContacts = async (req, res) => {
  const result = await getAllContactsDb();
  res
  .json({
    "contacts": result,
  });
}

const putContact = async (req, res) => {
  const { id } = req.params;
  const result = await editContact(id, req.body);
  if(result === 0) {
    return res
    .status(404)
    .json({
      message: 'Contact tidak ditemukan'
    })
  }
  res
  .json({
    message: "Contact berhasil di update"
  })
}

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContactDb(id);
  if(result === 0) {
    return res
    .status(404)
    .json({
      message: 'Contact tidak ditemukan'
    })
  }
  res
  .json({
    message: "Contact berhasil dihapus"
  })
}

module.exports = {
  postContact,
  getAllContacts,
  putContact,
  deleteContact,
}