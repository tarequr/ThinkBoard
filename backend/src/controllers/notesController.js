const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });

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

const storeNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.create({
            title,
            content
        });

        res.status(200).json({
            success: true,
            message: 'New note created successfully',
            note
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Create Note API: ${error.message}`,
            error
        });

    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

        if (!note) {
            return res.status(500).send({
                success: false,
                message: 'No note available'
            });
        }

        res.status(200).send({
            success: true,
            message: 'Note updated successfully',
            note
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Update Note API: ${error.message}`,
            error
        });
    }
}

const getAllNoteById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({
                success: false,
                message: 'Please provide food id.'
            });
        }

        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send({
                success: false,
                message: 'No note available'
            });
        }

        res.status(200).send({
            success: true,
            note
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get Single Note API: ${error.message}`,
            error
        });
    }
}

const deleteNote = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({
                success: false,
                message: 'Please provide note id.'
            });
        }

        await Note.findByIdAndDelete(req.params.id);

        res.status(200).send({
            success: true,
            message: 'Note deleted successfully'
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Delete Note API: ${error.message}`,
            error
        });
    }
}

module.exports = {
    getAllNotes,
    storeNote,
    updateNote,
    getAllNoteById,
    deleteNote
};