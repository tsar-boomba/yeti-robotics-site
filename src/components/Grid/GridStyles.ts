import styled from 'styled-components';

export const GridStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	width: clamp(300px, 1200px, 100%);
	margin-top: 3rem;
	overflow: hidden;
`;
