const { user } = require("../models/index");
const modules = require("../modules/module");

exports.getAll = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json({
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.store = async (req, res) => {
  if (
    req.body.nama == undefined ||
    req.body.email == undefined ||
    req.body.password == undefined ||
    req.body.nama == "" ||
    req.body.email == "" ||
    req.body.password == ""
  ) {
    return res.status(403).json({
      message: "Data Tidak Boleh Kosong",
      status: 403,
      success: false,
    });
  }
  const { nama, email, password } = req.body;

  try {
    const newUser = await user.create({
      nama,
      email,
      password,
    });
    res.status(201).json({
      message: "Data Berhasil Di Tambahkan",
      data: newUser,
      status: 201,
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
