
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