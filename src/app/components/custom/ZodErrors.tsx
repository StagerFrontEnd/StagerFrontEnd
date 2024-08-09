import styles from "./ZodErrors.module.scss"

export function ZodErrors({ error }: { error: string }) {
    if (!error) return null;
    return (
      <div className={styles.zodError}>
        {error}
      </div>
    );
  }