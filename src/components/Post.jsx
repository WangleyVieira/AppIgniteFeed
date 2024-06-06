import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src='https://avatars.githubusercontent.com/u/61789985?v=4'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Wangley Vieira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 22:23h' datetime="2022-05-11 11:22:30">Publicado há 1h</time>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>👉 <a href=''>jane.design/doctorcare</a></p>

                    <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
                </div>
            </header>
        </article>
    )
}