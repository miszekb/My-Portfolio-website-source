import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import styles from './Articles.module.css';

const Articles = () => {
    return <div className={styles.articlesContainer}>
        <div className={styles.articlesGrid}>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
            <ArticleThumbnail/>
        </div>
        <div className={styles.articlesPagination}>
            <button className={styles.changePageButton}>{'<-'}</button>
                <div className={styles.pageButton}>1</div>
                <div className={styles.pageButton}>2</div>
                <div className={styles.pageButton}>3</div>
                <div className={styles.pageButton}>4</div>
                <div className={styles.pageButton}>5</div>
                <div className={styles.pageButton}>6</div>
            <button className={styles.changePageButton}>{'->'}</button>
        </div>
    </div>
}

export default Articles;