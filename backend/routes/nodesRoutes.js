const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('You just fetched the nodes');
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'Node created successfully' });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Node with ID ${id} updated successfully` });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Node with ID ${id} deleted successfully` });
});

module.exports = router;