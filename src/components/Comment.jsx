import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

import PropTypes from 'prop-types';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [LikeCount, setLikeCount] = useState(0);

    function handleDeletComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(LikeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:github.com/LuisFelipeCocco.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luis Felipe</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeletComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
Comment.propTypes = {
    content: PropTypes.string.isRequired,
    onDeleteComment: PropTypes.func.isRquired,
  };
