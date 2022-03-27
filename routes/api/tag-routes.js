const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Category.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Category.update({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({message: `No category with that id found`})
      return;
    }
    res.status(200).json(tagData);

  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
