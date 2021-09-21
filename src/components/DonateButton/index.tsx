import { motion } from "framer-motion";
import React from "react";
import { DonateButtonStyle } from "./DonateButtonStyles";

const DonateButton = () => {
    return(
        <motion.div whileTap={{scale:0.9}} whileHover={{scale:1.1}}>
        <DonateButtonStyle>Donate!</DonateButtonStyle>
        </motion.div>
    );
}

export default DonateButton;