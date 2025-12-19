const Users = require("./../Model/UserModel");

exports.getAllUser = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      msg: error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);

    res.status(201).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "Success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
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