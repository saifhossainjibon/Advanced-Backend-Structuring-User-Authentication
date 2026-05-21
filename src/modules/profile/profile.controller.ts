import type { Request, Response } from "express";
import { profileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result= await profileService.createProfileIntoDb(req.body)
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.massage,
      error: error,
    });
  }
};

export const profileController = {
  createProfile,
};
