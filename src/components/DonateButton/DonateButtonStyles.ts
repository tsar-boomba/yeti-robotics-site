import styled from "styled-components";
import { colors } from "../../styles/colors";

export const DonateButtonStyle = styled.button`
    border: 0;
    position: absolute;
    top: 60px;
    right: 40px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 10px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    :hover{
        background-color: ${colors.primaryHovered};
    }
`
