export const extractYear = (
	dateString: string,
	options: Intl.DateTimeFormatOptions['year'] = 'numeric',
) => {
	return new Date(dateString).toLocaleString(undefined, {
		year: options,
	});
};

export const extractMonth = (
	dateString: string,
	options: Intl.DateTimeFormatOptions['month'] = 'long',
) => {
	return new Date(dateString).toLocaleString(undefined, {
		month: options,
	});
};

export const extractDay = (
	dateString: string,
	options: Intl.DateTimeFormatOptions['day'] = '2-digit',
) => {
	return new Date(dateString).toLocaleString(undefined, {
		day: options,
	});
};
