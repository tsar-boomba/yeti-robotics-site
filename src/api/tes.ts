import { APIHandler } from '@/declarations';

const handler: APIHandler = (req, res) => {
	res.status(200).json({ message: 'Hellow, world!' });
};

export default handler;
