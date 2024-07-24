const stuModel = require('../model/stuModel');
const bcrypt = require('bcrypt');

const stuSave = async (req, res) => {
    try {
        const { email, password, confirmPassword, ...otherData } = req.body;
        
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'Email, Password, and Confirm Password are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Password and Confirm Password do not match' });
        }

        const existingUser = await stuModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const myData = new stuModel({ ...otherData, email, password: hashedPassword });

        await myData.save();
        res.status(201).json({ message: 'Data saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
};

const stuDisplay = async (req, res) => {
    try {
        const data = await stuModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving data' });
    }
};

const stubyid = async (req, res) => {
    try {
        const data = await stuModel.findById(req.params.id);
        if (data) {
            return res.status(404).json({ error: 'Data found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
    }
};
const stuDelete = async (req, res) => {
    try {
        const data = await stuModel.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
    }
};

const stuEdit = async (req, res) => {
    try {
        const { email, password, confirmPassword, ...otherData } = req.body;

        if (email) {
            const existingUser = await stuModel.findOne({ email });
            if (existingUser && existingUser._id.toString() !== req.params.id) {
                return res.status(400).json({ error: 'Email already exists' });
            }
        }

        if (password) {
            if (!confirmPassword) {
                return res.status(400).json({ error: 'Confirm Password is required' });
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ error: 'Password and Confirm Password do not match' });
            }

            otherData.password = await bcrypt.hash(password, 10);
        }

        const data = await stuModel.findByIdAndUpdate(req.params.id, { ...otherData, email }, { new: true });
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating data' });
    }
};

module.exports = {
    stuSave,
    stuDisplay,
    stubyid,
    stuDelete,
    stuEdit
};
