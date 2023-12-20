import httpStatus from 'http-status';

import { UserServices } from './user.service';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';



const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
const createStudent:RequestHandler = catchAsync(async (req, res,next) => {


  const {password, student: studentData } = req.body;

   

  const result = await UserServices.createStudentIntoDB(password, studentData);

sendResponse(res,{
  statusCode:httpStatus.OK,
  success:true,
  message:"student created Successfully",
  data:result
})

// res.status(200).json({
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is created succesfully',
//     data: result,
//   });

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
