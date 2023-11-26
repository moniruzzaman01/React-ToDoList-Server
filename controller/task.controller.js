const { client } = require("../dbconnect");

const run = async () => {
  try {
    //Data collections
    const taskCollection = client.db("to-do-list").collection("all-tasks");

    //api for insert task in mongodb
    module.exports.addTasks = async (req, res) => {
      const task = req.body;
      const result = await taskCollection.insertOne(task);
      res.send(result);
    };
    //api for get task filtered by user email
    module.exports.getTasksByEmail = async (req, res) => {
      const email = req.params.email;
      const result = await taskCollection.find({ userEmail: email }).toArray();
      res.send(result);
    };
    //api for delete task using task id
    module.exports.deleteTasksById = async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.send(result);
    };
    //get all tasks. it used for testing purpose
    module.exports.getAllTasks = async (req, res) => {
      let result;
      result = await taskCollection.find({}).toArray();
      if (result) {
        res.send(result);
      } else {
        res.send({ status: false, message: "it's only for admin access!!!" });
      }
    };
  } catch (error) {
    console.log(error);
  }
};
run().catch(console.dir);
