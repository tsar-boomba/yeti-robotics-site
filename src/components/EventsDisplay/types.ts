export interface EventData {
	frontmatter: {
		title: string;
		date: string;
		time: string;
		location: string;
	};
	id: string;
	slug: string;
}
