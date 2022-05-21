import { TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Home.module.css'
import { Task } from 'typings/tasks';
import { useTasks } from 'store';
import EditIcon from '@mui/icons-material/Edit';

const Home: NextPage = () => {
  const { setTaskIndexToEdit, taskIndexToEdit, tasks, setTasks } = useTasks();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState<Task>({ description: '' });
  const [search, setSearch] = useState('');

  const createOrEditTask = (index?: number | null) => {
    if (index !== null) {
      const newTaskList = [...tasks.slice(0, index), {
        description: taskInfo.description
      }, ...tasks.slice(index! + 1)];
      setTasks([...newTaskList]);
      setTaskIndexToEdit(null);
      setOpenCreateModal(false);
    } else {
      if (taskInfo.description) {
        setOpenCreateModal(false);
        setTasks([...tasks, { ...taskInfo }]);
      }
    }
    setTaskInfo({ description: '' });
  };

  const deleteTask = (index: number) => {
    const newTaskList = [...tasks.slice(0, index),
    ...tasks.slice(index + 1)];
    setTasks([...newTaskList]);
  };

  const editTask = (index: number) => {
    setTaskIndexToEdit(index);
    setTaskInfo({ description: tasks[index].description });
    setOpenCreateModal(true);
  }

  const cancelEdit = () => {
    setTaskInfo({ description: '' });
    setOpenCreateModal(false);
  }

  const _taskList = tasks.filter(t => t.description.formatToSearch(search))

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
          <TextField variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} label="Search for Tasks" sx={{
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
        <div className={styles.tasksList}>
          {_taskList.map((t, index) => (
            <div key={index} className={styles.taskRow}>
              {t.description}
              <div>
                <Button variant="outlined" onClick={() => editTask(index)} startIcon={<EditIcon />}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => deleteTask(index)} startIcon={<DeleteIcon />} sx={{
                  marginLeft: '10px',
                }}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCreateModal && (
        <div className={styles.createModalBg}>
          <div className={styles.createModal}>
            <div className={styles.modalContent}>
              <TextField
                multiline
                maxRows={8}
                minRows={8}
                variant="outlined"
                label="Description"
                value={taskInfo.description}
                onChange={(e) => setTaskInfo({ ...taskInfo, description: e.target.value })}
                sx={{
                  width: '100%',
                  zIndex: 0,
                }} />
            </div>
            <div className={styles.modalFooter}>
              <Button variant="outlined" color="error" onClick={cancelEdit} sx={{
                height: 40,
              }}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => createOrEditTask(taskIndexToEdit)}
                sx={{
                  height: 40,
                  marginLeft: '15px',
                }}>
                {taskIndexToEdit !== null ? 'Continue' : 'Create'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
