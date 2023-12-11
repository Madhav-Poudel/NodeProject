// const getAllUser = (req, res) => {
//   res.json({ message: "get all users details" });
// };

// const createUser = (req, res) => {
//   res.json({ message: "user Create Successfully" });
// };

// const getUserById = (req, res) => {
//   res.json({ message: `details of user with id ${req.params.id} is found!!` });
// };

// const updateUser = (req, res) => {
//   res.json({ message: `user with ${req.params.id}is updated successfully!!` });
// };

// const deleteUser = (req, res) => {
//   res.json({ message: `user with ${req.params.id}is deleteed successfully` });
// };


// module.exports={
//     getAllUser,
//     createUser,
//     getUserById,
//     updateUser,
//     deleteUser
// }


// StudentController
const getAllStudent = (req, res) => {
  res.json({ message: "get all Student details" });
};
const getStudentById = (req, res) => {
  res.json({ message: `details of students with id ${req.params.id} is found!!` });
};

const updateStudent = (req, res) => {
  res.json({ message: `Student with ${req.params.id}is updated successfully!!` });
};

const deleteStudent = (req, res) => {
  res.json({ message: `Students with ${req.params.id}is deleteed successfully` });
};

module.exports={
  getAllStudent,
  getStudentById,
  updateStudent,
  deleteStudent
}