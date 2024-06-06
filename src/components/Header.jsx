import styles from './Header.module.css'

import igniteLogo from '../images/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
            <img src={igniteLogo} alt="Logotipo da Ignite" />
        </header>
       
    )
}