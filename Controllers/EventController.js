const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, '../events.json');

// Helper function to read events from file
const readEventsFromFile = () => {
    try {
        if (!fs.existsSync(eventsFilePath)) {
            fs.writeFileSync(eventsFilePath, JSON.stringify([]));
        }
        const data = fs.readFileSync(eventsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading events file:', error);
        return [];
    }
};

// Helper function to write events to file
const writeEventsToFile = (events) => {
    try {
        fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
    } catch (error) {
        console.error('Error writing events file:', error);
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = readEventsFromFile();
        res.status(200).json({
            status: "Success",
            data: events,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            msg: error.message,
        });
    }
};

exports.getEvent = async (req, res) => {
    try {
        const events = readEventsFromFile();
        const event = events.find(e => e._id === req.params.id);
        if (!event) {
            return res.status(404).json({
                status: "Failed",
                msg: "Event not found",
            });
        }
        res.status(200).json({
            status: "Success",
            data: event,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            msg: error.message,
        });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const events = readEventsFromFile();
        const newEvent = {
            _id: Date.now().toString(),
            ...req.body,
            createdAt: new Date().toISOString()
        };
        events.push(newEvent);
        writeEventsToFile(events);

        res.status(201).json({
            status: "Success",
            data: newEvent,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const events = readEventsFromFile();
        const eventIndex = events.findIndex(e => e._id === req.params.id);
        if (eventIndex === -1) {
            return res.status(404).json({
                status: "Failed",
                message: "Event not found",
            });
        }
        events[eventIndex] = { ...events[eventIndex], ...req.body };
        writeEventsToFile(events);
        res.status(201).json({
            status: "Success",
            event: events[eventIndex],
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const events = readEventsFromFile();
        const eventIndex = events.findIndex(e => e._id === req.params.id);
        if (eventIndex === -1) {
            return res.status(404).json({
                status: "Failed",
                message: "Event not found",
            });
        }
        events.splice(eventIndex, 1);
        writeEventsToFile(events);
        res.status(201).json({
            status: "Deleted",
            data: null,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};