import express, { Application, NextFunction, Request, Response, Router } from 'express';
import httpStatus from 'http-status';


 const notFound=(req:Request, res:Response, next:NextFunction) => {
    let statusCode = 400;
 

    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message:"Not found",
        error:''
       
    });
}

export default notFound;