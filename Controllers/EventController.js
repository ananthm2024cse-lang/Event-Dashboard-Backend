const Events = require("./../Model/EventModel");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      status: "Success",
      data: events,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Events.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: event,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = await Events.create(req.body);

    res.status(201).json({
      status: "Success",
      data: event,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Events.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "Success",
      event,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Events.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "Deleted",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};