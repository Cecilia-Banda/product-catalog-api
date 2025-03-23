let products = []; 

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = { id: products.length + 1, name, price, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  let product = products.find(p => p.id == id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = name || product.name;
  product.price = price || product.price;
  product.category = category || product.category;
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  products = products.filter(p => p.id != id);
  res.status(200).json({ message: "Product deleted successfully" });
};
