import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operation';
import Notiflix from 'notiflix';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    Notiflix.Notify.success(`Task deleted`);
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
