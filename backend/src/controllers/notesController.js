const getAllNotes = (req, res) => {
    res.send('You just fetched the nodes. This is a placeholder response.');
}

const storeNote = (req, res) => {
    res.status(201).json({ message: 'Node created successfully' });
}

const updateNote = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Node with ID ${id} updated successfully` });
}

const deleteNote = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Node with ID ${id} deleted successfully` });
}

module.exports = {
    getAllNotes,
    storeNote,
    updateNote,
    deleteNote
};