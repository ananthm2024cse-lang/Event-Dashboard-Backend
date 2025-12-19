const express = require("express");

const eventController = require("./../Controllers/EventController");

let eventRoutes = express.Router();
eventRoutes.route("/").get(eventController.getAllEvents).post(eventController.createEvent);
eventRoutes.route("/:id").get(eventController.getEvent).put(eventController.updateEvent).delete(eventController.deleteEvent);

module.exports = eventRoutes;