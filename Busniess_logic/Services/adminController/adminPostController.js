const adminpostFetching = async (req,res) => {
  try {
    res.status(200).json({ message: "i am fetching data" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const adminpostData = (req,res) => {
  try {
    res.status(200).json({ message: "i am post data" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const adminpostFetch = (req,res) => {
  try {
    res.status(200).json({ message: "i am fetching by id data" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const adminpostUpdate = (req,res) => {
  try {
    res.status(200).json({ message: "i am update by id data" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const adminPostDelete = (req,res) => {
  try {
    res.status(200).json({ message: "i am delete by id data" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = {
  adminpostFetching,
  adminpostData,
  adminpostFetch,
  adminpostUpdate,
  adminPostDelete,
};
