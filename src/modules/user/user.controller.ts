import type { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => { 
    // ai controller er vitore req, res handle korbe baki sob business logic and query ace aigula amra service er
    // vitore handle korbo
//   const { name, email, age, password } = req.body;
  try {
    const result =await userService.createUserIntoDb(req.body)
    res.status(201).json({
      success: true,
      massage: "user created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}
const getAllUser=  async (req: Request, res: Response) => {
  console.log(req.user)
  try {
    // const result = await pool.query(`
    //         SELECT * FROM users
    //         `); // ai operation ta korbo service layer  e
    const result= await userService.getAllUsersFromDb()
    res.status(200).json({
      success: true,
      massage: "users retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.getSingleUserFromDb(id as string)
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        massage: "users not found",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      massage: "Single user retrived successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}

const updateSingleUser= async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.updateSingleUserFromDb(req.body, id as string)
    console.log(result);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        massage: "users not found",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      massage: "single User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}
const deleteSingleUser=async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.deleteSingleUserFromDb(id as string)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        massage: "users not found",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      massage: "User deleted successfully",
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
}
export const userController={
    createUser,getAllUser,getSingleUser,updateSingleUser,deleteSingleUser
}