import { getAll, update, deleteOne,add} from "../dal/riddelDal.js";

async function getAllRiddles(req, res) {
  try {
    console.log('get all riddles controller');
    const allRiddles = await getAll();
    res.send(allRiddles);
  } catch (error) {
    console.error('Error getting all riddles:', error);
    res.status(500).send({ message: "Error getting all riddles" });
  }
}

async function addRiddles(req, res) {
    try {
        console.log('add riddles controller');
        const data = req.body;
        await add(data);
        res.status(201).send({ message: "Riddle added" });
    } catch (error) {
        console.error('Error adding riddle:', error);
        res.status(500).send({ message: "Error adding riddle" });
    }
}

async function updateRiddles(req, res) {
    try {
        const data = req.body;
        await update(data);
        res.status(200).send({ message: "Riddle updated" });
    } catch (error) {
        console.error('Error updating riddle:', error);
        res.status(500).send({ message: "Error updating riddle" });
    }
    res.status(200).send({ message: "Riddle updated" });
}

async function deleteRiddles(req, res) {
  const id = req.body;
  await deleteOne(id);
    res.status(200).send({ message: "Riddle deleted" });
}

export {
  getAllRiddles,
  addRiddles,
  updateRiddles,
  deleteRiddles
}