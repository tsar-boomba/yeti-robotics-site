import { VercelRequest, VercelResponse } from '@vercel/node';

export type APIHandler = (req: VercelRequest, res: VercelResponse) => void;
