import { APIHandler } from './declarations';

const handler: APIHandler = (_req, res) => {
	res.status(200).json({ message: 'gogogingon' });
};

export default handler;
