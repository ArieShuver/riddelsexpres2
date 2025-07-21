import { getall, update, create } from "../dal/dalPlayer.js";

async function getAllUsers(req, res) {
  try {
    const allUsers = await getall();
    
    console.log('alllUsser', allUsers);
    await res.json(allUsers);
  }
  catch (error) {
    console.log('error fun get all', error.message);

  }
}

async function addUsers(req, res) {
  const data = req.body;
  await create(data);
  res.status(201).send({ message: "User added" });

}

async function updateUsers(req, res) {
  const data = req.body;
  console.log('data:', data);
  await update(data.name, data);
  res.status(200).send({ message: "User updated" });
}

async function deleteUsers(req, res) {
  const { id } = req.body;
  await deleteRiddle(id);
  res.status(200).send({ message: "User deleted" });
}

export {
  getAllUsers,
  addUsers,
  updateUsers,
  deleteUsers
}