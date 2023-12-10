const getAllUser = (req, res) => {
  res.json({ message: "get all users details" });
};

const createUser = (req, res) => {
  res.json({ message: "user Create Successfully" });
};

const getUserById = (req, res) => {
  res.json({ message: `details of user with id ${req.params.id} is found!!` });
};

const updateUser = (req, res) => {
  res.json({ message: `user with ${req.params.id}is updated successfully!!` });
};

const deleteUser = (req, res) => {
  res.json({ message: `user with ${req.params.id}is deleteed successfully` });
};


module.exports={
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}