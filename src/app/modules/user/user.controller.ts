import httpStatus from 'http-status';

import { UserServices } from './user.service';
import { NextFunction, Request, Response } from 'express';

const createStudent = (async (req:Request, res:Response,next:NextFunction) => {

try{
  const {password, student: studentData } = req.body;

   

  const result = await UserServices.createStudentIntoDB(password, studentData);

res.status(200).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
}
catch(err){
  next(err);
}
});

// const createFaculty = catchAsync(async (req, res) => {
//   const { password, faculty: facultyData } = req.body;

//   const result = await UserServices.createFacultyIntoDB(password, facultyData);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Faculty is created succesfully',
//     data: result,
//   });
// });

// const createAdmin = catchAsync(async (req, res) => {
//   const { password, admin: adminData } = req.body;

//   const result = await UserServices.createAdminIntoDB(password, adminData);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Admin is created succesfully',
//     data: result,
//   });
// });

export const UserControllers = {
  createStudent,
  // createFaculty,
  // createAdmin,
};
