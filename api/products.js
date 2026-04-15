const { getCollection } = require('./_lib/mongo');

module.exports = async (req, res) => {
  const collection = await getCollection();

  if (req.method === 'POST') {
    const newProduct =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;

    await collection.insertOne(newProduct);
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const products = await collection.find({}).toArray();
  return res.status(200).json(products);
};
