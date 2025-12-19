const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_id: {
        type: String,
        required: [true, "Event ID is required"],
        unique: true
    },
    name: {
        type: String,
        required: [true, "Event name is required"],
        trim: true
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    organizer: {
        type: String,
        required: [true, "Organizer is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Completed', 'Cancelled'],
        default: 'Upcoming'
    },
    registrations: {
        type: Number,
        default: 0
    },
    capacity: {
        type: Number,
        required: [true, "Capacity is required"]
    }
});

const Events = mongoose.model("Event", eventSchema);

module.exports = Events;