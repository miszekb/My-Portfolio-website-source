import styles from './ArticleThumbnail.module.css';

const ArticleThumbnail = (props) => {
    return <div className={styles.articleThumbnail}>
        <div className={styles.thumbnailImage}>
            <img src="./earth-texture.jpg"></img>
        </div>
        <div className={styles.articleInfo}>
            <h3>Article Title</h3>
            <div className={styles.publicationDate}>11.06.2024</div>
        </div>
    </div>;
}

export default ArticleThumbnail;