import { APIHandler } from './types';

const handler: APIHandler = (_req, res) => {
	try {
		res.status(200).json({ message: 'gogogingon' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

export default handler;
