import styles from './NotFoundBlock.module.scss';

const NotFoundeBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Товары не найдены</h1>
      <p className={styles.descr}>К сожалению данная страница не найдена</p>
    </div>
  );
};

export default NotFoundeBlock;
