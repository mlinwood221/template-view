const templatesData = require('../templates.json');

exports.getAll = (req, res) => {
  res.json(templatesData);
};