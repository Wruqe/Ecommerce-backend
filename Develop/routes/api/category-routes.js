const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryRoutes = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryRoutes)
  } catch (err) {
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryRoutes = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if(!categoryRoutes){
      res.status(404).json({message: 'no category with this name!'})
      return
    }
    res.status(200).json(categoryRoutes)
  } catch (err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryRoutes = await Category.create(req.body);
    res.status(200).json(categoryRoutes)
  } catch (err) {
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryRoutes = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if(!categoryRoutes) {
     return res.status(404).json({message: 'no categories with this name!'})
    }
    res.status(200).json(categoryRoutes)
  } catch (err) {
    res.status(500).json(err)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
try {
  const categoryRoutes = await Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  if(!categoryRoutes){
    res.status(404).json({message: ' no category with this name!'})
    return;
  }
  res.status(200).json(categoryRoutes)
} catch (error) {
  res.status(500).json(err)
}
  // delete a category by its `id` value
});

module.exports = router;
