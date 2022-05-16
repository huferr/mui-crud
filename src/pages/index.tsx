import { TextField, Button } from '@mui/material'
import { TextareaAutosize } from '@mui/base';
import type { NextPage } from 'next'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [openCreateModal, setOpenCreateModal] = useState(false);

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
            zIndex: 0,
          }} />
          <Button variant="contained" onClick={() => setOpenCreateModal(true)} sx={{
            width: '20%',
            height: 54,
            fontSize: 36,
          }}>+</Button>
        </div>
        <Button variant="outlined" color="error" onClick={() => setOpenCreateModal(true)} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>

      {openCreateModal && (
        <div className={styles.createModalBg}>
          <div className={styles.createModal}>
            <div className={styles.modalContent}>
              <TextField variant="outlined" label="Name" sx={{
                width: '100%',
                zIndex: 0,
                marginBottom: '20px',
              }} />
              <TextField multiline maxRows={8} minRows={8} variant="outlined" label="Description" sx={{
                width: '100%',
                zIndex: 0,
              }} />
            </div>
            <div className={styles.modalFooter}>
              <Button variant="outlined" color="error" onClick={() => setOpenCreateModal(false)} sx={{
                height: 40,
              }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={() => setOpenCreateModal(false)} sx={{
                height: 40,
                marginLeft: '15px',
              }}>
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
