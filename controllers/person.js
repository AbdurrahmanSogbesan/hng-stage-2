const { validationResult } = require("express-validator");
const Person = require('../models/person')


exports.createPerson = async (req, res, next) => {
    const errors = validationResult(req);
    const { name } = req.body;

    try {
        // Error handling
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed, input data is incorrect");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }

        const existingPerson = await Person.findOne({ name });
        if (existingPerson) {
            const error = new Error("Person already exists. Use a different name.");
            error.statusCode = 422;
            throw error;
        }

        const person = await Person.create({ name });

        res.status(201).json({ message: "Person created successfully.", data: person })
    } catch (err) {
        // Error handling
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // Sends error to error handling middleware
        next(err);
    }

}

exports.getPerson = async (req, res, next) => {
    const { personId } = req.params;
    try {
        const person = await Person.findById(personId);
        if (!person) {
            const error = new Error("Person was not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            message: "Person fetched successfully!",
            data: person,
        });
    } catch (err) {
        // Error handling
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // Sends error to error handling middleware
        next(err);
    }
}

exports.updatePerson = async (req, res, next) => {
    const errors = validationResult(req);
    const { personId } = req.params;
    try {
        if (!errors.isEmpty()) {
            // Error handling
            const error = new Error("Validation failed, input data is incorrect");
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }

        const person = await Person.findOneAndUpdate(
            { _id: personId },
            req.body,
            { new: true }
        );

        if (!person) {
            const error = new Error("Person was not found");
            error.statusCode = 422;
            throw error;
        }

        res.status(200).json({
            message: "Person updated successfully!",
            data: person,
        });
    } catch (err) {
        // Error handling
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // Sends error to error handling middleware
        next(err);
    }
}

exports.deletePerson = async (req, res, next) => {
    const { personId } = req.params;
    try {
        const person = await Person.findByIdAndDelete(personId);

        if (!person) {
            const error = new Error("Person was not found");
            error.statusCode = 422;
            throw error;
        }

        res.status(200).json({
            message: "Person deleted successfully!",
        });
    } catch (err) {
        // Error handling
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // Sends error to error handling middleware
        next(err);
    }
}