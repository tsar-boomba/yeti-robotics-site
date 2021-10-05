import styled from 'styled-components';

export const EventWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	summary {
		margin: 0;
		padding: 0;
		border-bottom: 10px solid #000000;
		width: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		h1 {
			font-size: 40px;
		}
	}

	main {
		margin: 0;
		padding: 10px;
		width: clamp(300px, 800px, 100%);

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			text-decoration: underline;
		}

		p {
			font-size: 22px;
			margin: 1rem 0 2rem 0;
		}

		img {
			object-fit: scale-down;
			max-width: clamp(300px, 800px, 100%);
			max-height: clamp(400px, 1000px, 100%);
		}
	}
`;
