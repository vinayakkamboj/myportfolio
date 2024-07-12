const Contact = require('./Contact');

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.send({ message: 'Contact message saved successfully!' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to save contact message' });
  }
};
