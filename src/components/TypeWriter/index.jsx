import Typewriter from "typewriter-effect";
import styles from "./index.module.scss";
import copies from "../../copies.json";

const Writer = () => {
  return (
    <div className={styles.wrapper}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(copies.typeWriter).start();
        }}
        options={{
          wrapperClassName: styles.text,
        }}
      />
    </div>
  );
};

export default Writer;
