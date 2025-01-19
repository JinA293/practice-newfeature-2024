// components/ProfileCard.tsx
import Image from "next/image";
import styles from "./intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <h1 className={styles.heading}>自己紹介</h1>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <p className={styles.text}><strong>名前：</strong>ジン</p>
                    <p className={styles.text}><strong>所属：</strong>株式会社〇〇〇〇 新卒1年目フロントエンドエンジニア</p>
                    <p className={styles.text}><strong>趣味：</strong>音楽を聴く、ドライブ（車・バイク）、人にちょっかいをかける</p>
                </div>
                <div className={styles.imageSection}>
                    <Image
                        src="/jin.jpg" // 仮の画像ファイルを置き換えてください
                        alt="顔写真"
                        width={300}
                        height={300}
                        className={styles.image} />
                </div>
            </div>
        </div>
    );
};

export default Intro;
