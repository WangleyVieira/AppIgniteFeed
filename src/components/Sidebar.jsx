//importação do icone
import * as React from 'react';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import { fetchUrl } from '../services/api';

import styles from './Sidebar.module.css';

const getMessage = async (event) => {
    event.preventDefault();
    try {
        const data = await fetchUrl();
        console.log(data);
        if (data) {
            alert(data.texto);
            return data.texto;
        } else {
            alert('Nenhuma mensagem foi retornada.');
        }
    } catch (error) {
        alert('Erro ao buscar a mensagem: ' + error.message);
    }
};

// const getMessage2 = async () => {

//     try {
//         const data = await fetchUrl();
//         console.log(data);
//         if (data) {
//             return data.texto;
//         } else {
//             return 'deu pau';
//         }
//     } catch (error) {
//         alert('Erro ao buscar a mensagem: ' + error.message);
//     }
// };

export function Sidebar() {

    // const [mensagem, setMensagem] = useState('');

    // const obterMensagem = () => {
    //     const msg = getMessage2().then(result => {
    //         setMensagem(result);
    //     })
    // }

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     obterMensagem();
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/82189342?v=4' />
                <strong>Wangley Vieira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='' onClick={getMessage}>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}