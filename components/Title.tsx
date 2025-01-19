// components/ProfileCard.tsx
import styles from "./title.module.css";

const Title = () => {
    return (
        <div className={styles.title}>
            <h1 className={styles.heading}>ここ１年（くらい）でBaselineになったCSSプロパティ（とか）に目を向けたい！</h1>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <p className={styles.text}>- フロントエンドガンバリタイ</p>
                    <p className={styles.text}>- 最近たまたま見た記事で新機能まとめみたいなのがあった</p>
                    <p className={styles.text}>- ただ業務をこなしたりドメイン知識得たりだけでなく未来にも目を向けたい</p>
                    <p className={styles.text}>- 業務で新しくbaselineになった機能を提案して少しづついいプロダクトにできたら面白そう</p>
                    <p className={styles.text}>- 勉強ついでに自分で触りながら色々見てみよう〜</p>
                    <p className={styles.text}>（ちなみに紹介するのは主要ブラウザ対応済みのものだけ）</p>
                </div>
            </div>
        </div>
    );
};

export default Title;
