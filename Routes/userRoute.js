// const express = require("express")
// const router = express.Router();
// const {
//     getAllUser,
//     createUser,
//     getUserById,
//     updateUser,
//     deleteUser
// }  = require("../Controllers/userController.js")
// router.route('/').get(getAllUser);
// router.route('/:id').get(getUserById);
// router.route('/').post(createUser);
// router.route('/:id').put(updateUser);
// router.route('/:id').delete(deleteUser);

// module.exports = router;

// Students Route and Controller
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
