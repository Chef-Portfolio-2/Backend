const router = require('express').Router();
const Posts = require('./posts-model.js');
const restricted = require('../auth/restricted.js');

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch {
    res.status(500).json({ message: 'Something went wrong.' });
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } catch {
    res.status(500).json({ message: 'Something went wrong.' });
  }
})

router.post('/', restricted, async (req, res) => {
  const post = req.body;
  if (!post.chef_name || !post.title || !post.photo || !post.meal_type || !post.ingredients || !post.instructions){
    res.status(400).json({ message: 'Please complete all input fields.' });
  }
  try {
    const newPost = await Posts.add(post);
    res.status(201).json(newPost);
  } catch {
    res.status(500).json({ message: 'Something went wrong.' });
  }
})

router.delete('/:id', restricted, async (req, res) => {
  const { id } = req.params;
  try { 
    const deleted = await Posts.remove(id);
    res.status(204).json({ removed: deleted });
  } catch {
    res.status(500).json({ message: 'Failed to remove post.' });
  }
})

router.put('/:id', restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const post = await Posts.update(id, changes);
    res.status(201).json({ message: `Post with the id of ${post} has been successfully modified.` });
  } catch {
    res.status(500).json({ message: 'The post could not be modified.' });
  }
})

module.exports = router;