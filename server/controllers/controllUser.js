import { getall, update, create, getById } from "../dal/dalPlayer.js";

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
  const user = await create(data);
  res.status(201).send({ message: "User added", user });
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

async function getUserById(req, res) {
  const { id } = req.body;
  const user = await getById(id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
}

export {
  getAllUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  getUserById
}