const Serve = require("../models/index");

exports.get = async (req, res, next) => {
  try {
    const result = await Serve.find();

    return res.status(201).json({
      result: result,
      message: "ดึงข้อมูลสำเร็จ",
    });
  } catch (error) {
    next(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    const carID = req.query.carID;
    const menberID = req.query.menberID;

    if (carID) {
      const result = await Serve.find({
        carID: carID,
      });

      console.log(result);

      res.status(201).json({
        result: result,
        message: "ค้นหาข้อมูลสำเร็จ",
      });
    } else if (menberID) {
      const result = await Serve.find({
        menberID: menberID,
      });

      console.log(result);

      res.status(201).json({
        result: result,
        message: "ค้นหาข้อมูลสำเร็จ",
      });
    } else {
      const result = await Serve.find({
        carID: carID,
        menberID: menberID,
      });

      console.log(result);

      res.status(201).json({
        result: result,
        message: "ค้นหาข้อมูลสำเร็จ",
      });
    }
  } catch (error) {
    next(next);
  }
};
