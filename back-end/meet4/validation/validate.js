const contactsValidation = (schema, payload) => {
  const { error } = schema.validate(payload);

  if(error) {
    throw new Error(error.message);
  }
}

module.exports = contactsValidation;