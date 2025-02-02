import { Link } from 'react-router';
import ArticleThumbnail from '../../components/ArticleThumbnail/ArticleThumbnail';
import styles from './Articles.module.css';

const Articles = () => {
    return <div className={styles.articlesContainer}>
        <h1 className={styles.pageTitle}>My Articles</h1>
        <div className={styles.articlesGrid}>
            <Link to="/articles/1"><ArticleThumbnail/></Link>
            <Link to="/articles/2"><ArticleThumbnail/></Link>
            <Link to="/articles/3"><ArticleThumbnail/></Link>
            <Link to="/articles/4"><ArticleThumbnail/></Link>
            <Link to="/articles/5"><ArticleThumbnail/></Link>
            <Link to="/articles/6"><ArticleThumbnail/></Link>
            <Link to="/articles/7"><ArticleThumbnail/></Link>
            <Link to="/articles/8"><ArticleThumbnail/></Link>
            <Link to="/articles/9"><ArticleThumbnail/></Link>
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