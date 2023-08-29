import { AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { wrapPromise } from "../../utils";

const getJson = () =>
  new Promise((resolve) => {
    import("../../datasets/countries.json").then((data) => {
      resolve(data);
    });
  });

const getJsonPromise = wrapPromise(getJson());

const CountryModal = ({ open, handleClose }) => {
  const countriesData = getJsonPromise.read();

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
