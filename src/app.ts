/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response, Router } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
// import globalErrorHandler from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// application routes
app.use('/api/v1',router);
// const test = async (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get('/', test);

 app.use(globalErrorHandler);

// app.use((err:any, req:Request, res:Response, next:NextFunction) => {
//     let statusCode = 500;
//     let message = err.message || "Something went wrong";

//     return res.status(statusCode).json({
//         success: false,
//         message,
//         error: err
//     });
// });


// //Not Found
app.use(notFound);

export default app;
