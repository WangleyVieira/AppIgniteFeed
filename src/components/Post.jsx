import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';

export function Post(props) {
    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true}
                        src='https://avatars.githubusercontent.com/u/61789985?v=4'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Wangley Vieira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio às 22:23h' dateTime="2022-05-11 11:22:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário...'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}