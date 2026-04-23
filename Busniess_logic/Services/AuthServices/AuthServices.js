// register controller
const registerController = async (req, res) => {
  try {
    res.stauts(200).json({ message: "i am register api" });
  } catch (error) {
    res.stauts(400).json({ message: "something went wrong" });
  }
};

// login controller
const loginController = async (req, res) => {
try {
    res.stauts(200).json({ message: "i am login api" });
  } catch (error) {
    res.stauts(400).json({ message: "something went wrong" });
  }
};

// module export
module.exports = { registerController, loginController };
