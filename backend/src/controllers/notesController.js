const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({});

        if (!notes) {
            return res.status(404).send({
                success: false,
                message: 'No note available'
            });
        }

        res.status(200).send({
            success: true,
            totalCount: notes.length,
            notes
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get All Notes API: ${error.message}`,
            error
        });
    }
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