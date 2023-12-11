// StudentRoute.js
const express = require("express")
const router = express.Router();
const{
    getAllStudent,
  getStudentById,
  updateStudent,
  deleteStudent
}=require("../Controllers/userController.js")

router.route('/').get(getAllStudent);
router.route('/:id').get(getStudentById);
router.route('/:id').put(updateStudent);
router.route('/:id').delete(deleteStudent);
module.exports = router;
