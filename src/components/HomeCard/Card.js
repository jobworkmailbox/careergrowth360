import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import ModalComponent from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ data }) => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<>
			<Listing data={data} open={openModal} />
			<AnimatePresence>
				{open && (
					<Overlay close={closeModal}>
						<ModalComponent data={data} close={closeModal} open={open} />
					</Overlay>
				)}
			</AnimatePresence>
		</>
	);
};

export default Card;
