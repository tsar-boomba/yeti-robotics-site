import { APIHandler } from './types';

const handler: APIHandler = (_req, res) => {
	res.status(200).json({ message: 'gogogingon' });
};

export default handler;
