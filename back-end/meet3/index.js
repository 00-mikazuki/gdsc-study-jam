var admin = require("firebase-admin");

var serviceAccount = require("./config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://week-3-38690-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const express = require('express');
const app = express();

const db = admin.database();
const ref = db.ref('contacts');

app.use(express.json());

app.get('/' ,(req, res) => {
  res.send('Contacts api with firebase');
});

// add contact (create)
app.post('/contacts', (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = {
    name,
    email,
    phone,
  }

  ref.push(newContact);
  res.status(201)
  .json({
    message: 'Contact berhasil dibuat',
  });
});

// get contact by id (read)
app.get('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const result = await db.ref(`contacts/${id}`).get();
  if(!result.val()) {
    res.status(404)
    .json({
      message: 'Contact tidak ditemukan',
    });
    return;
  }

  const { name, email, phone } = result.val();
  res.json({
    name,
    email, 
    phone
  });
});

// get all contacts (read)
app.get('/contacts', async (req, res) => {
  const result = await ref.get();
  res.json({
    contacts: result.val()
  });
});

// edit contact by id (update)
app.put('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  const isExist = await db.ref(`contacts/${id}`).get();
  if(!isExist.val()) {
    res.status(404)
    .json({
      message: 'contact tidak ditemukan'
    });
    return;
  }

  const { name, email, phone } = req.body;
  const result = await db.ref(`contacts/${id}`)
  .update({
    name, 
    email, 
    phone
  });

  res.json({
    message: 'Contact berhasil diupdate',
  });
});

// delete contact by id (delete)
app.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  const isExist = await db.ref(`contacts/${id}`).get();
  if(!isExist.val()) {
    res.status(404)
    .json({
      message: 'contact tidak ditemukan'
    });
    return;
  }

  const result = await db.ref(`contacts/${id}`).remove();

  res.json({
    message: 'Contact berhasil dihapus'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
