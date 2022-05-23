import styles from "./Button.module.css";

function Button({ title, onClic, disabled, id }) {
  return (
    <button id={id} data-testid="button-component" className={styles.button} onClick={onClic}>
      {title}
    </button>
  );
}

export default Button;
