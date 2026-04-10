const products = [
  { name: 'Notebook', value: 3499.9 },
  { name: 'Mouse', value: 89.9 },
  { name: 'Teclado', value: 249.0 },
];

module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const newProduct =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;

    return res.status(200).json([...products, newProduct]);
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};
