import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const CountryModal = ({ open, handleClose }) => {
  const [data, setData] = useState();

  useEffect(() => {
    import("../../datasets/countries.json").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {open && (
        <Backdrop onClick={handleClose}>
          <Modal handleClose={handleClose} />
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default CountryModal;
