// initilasation the mongooses
const mongooses = require("mongoose");
// initalisation the dotenv files
const dotenv = require("dotenv").config({ quiet: true });
// db function
const DataBase = async () => {
  try {
    const data = await mongooses.connect(process.env.DATABASEURL, {
      dbName: process.env.DATANAME,
    });
    console.log(
      `DataBase is connected sucessfully to the ${process.env.DATANAME} on ${process.env.DBPORT} port`,
    );
  } catch (error) {
    console.log(
      `DataBase is connected issus in ${process.env.DATANAME} on ${process.env.DBPORT}port`,
    );
  }
};
// module export
module.exports = DataBase;
