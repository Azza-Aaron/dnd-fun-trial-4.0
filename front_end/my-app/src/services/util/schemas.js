import { object, string, number, date, InferType } from 'yup';

export const userNameSchema = object({
  username: string().required(),
}).required();

export const userEmailSchema = object({
  email: string().email().required(),
}).required();

export const userPasswordSchema = object({
  password: string().required(),
}).required();


export const createQuestSchema = object({
  questHeader: string().required(),
  questBody: string().required(),
  questReward: string().required(),
  questLength: string().required(),
  questCharacters: string().required(),
  notes: string().required(),
  questObstacles: string().required(),
  questRequirements: string().required(),
}).required()

export const updateQuestSchema = object({
  questHeader: string().required(),
  questBody: string().required(),
  questReward: string().required(),
  questLength: string().required(),
  questCharacters: string().required(),
  notes: string().required(),
  questObstacles: string().required(),
  questRequirements: string().required(),
  id: number().required()
}).required()