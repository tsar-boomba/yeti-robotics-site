import { APIHandler } from './declarations';

const handler: APIHandler = (_req, res) => {
	res.status(200).json({ message: 'Hellow, world!' });
};

export default handler;
