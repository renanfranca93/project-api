const products = [
  { name: 'Notebook', value: 3499.9 },
  { name: 'Mouse', value: 89.9 },
  { name: 'Teclado', value: 249.0 },
];

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  return res.status(200).json(products);
};
