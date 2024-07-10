import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';

import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {
 
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='' dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content}</p>;
                    }
                    else if (line.type == 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
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