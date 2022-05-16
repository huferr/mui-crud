import { TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Task Board
        </h1>

        <p className={styles.description}>
          Create, Edit and/or Delete a Task!
        </p>
      </header>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <TextField variant="outlined" label="Search for Tasks" sx={{
            width: '80%',
            marginRight: 2,
          }} />
          <Button variant="contained" sx={{
            width: '20%',
            height: 54,
            fontSize: 36,
          }}>+</Button>
        </div>
      </div>
    </main>
  )
}

export default Home
