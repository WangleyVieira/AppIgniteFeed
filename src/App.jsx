import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
          author = "Wangley Vieira"
          content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem dolores quasi qui modi omnis temporibus, nisi molestiae natus dignissimos quas quibusdam aliquam corporis cum accusamus hic nobis fuga explicabo!"
        />
        <Post
          author = "Wangley Matheus"
          content = "Novo conteúdo"
        />
        </main>
      </div>
    </div>
  )
}

// export default App
