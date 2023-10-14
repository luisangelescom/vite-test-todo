import { Todo } from '../types/todo';

export const todoFake: Todo[] = [
  {
    id: 1,
    name: 'luis',
    checked: false,
  },
  {
    id: 2,
    name: 'luis angel',
    checked: true,
  },
  {
    id: 3,
    name: 'TT',
    checked: true,
  },
];

export const saveLocalStorage = (todo: Todo[]) => {
  localStorage.setItem('to-do', JSON.stringify(todo));
};

export const getLocalStorage = (): Todo[] => {
  const todo = localStorage.getItem('to-do');
  if (todo) {
    return JSON.parse(todo) as Todo[];
  }
  return [];
};

export const sort = (a: Todo, b: Todo) => {
  if (a.checked && !b.checked) {
    return -1;
  }
  if (!a.checked && b.checked) {
    return 1;
  }
  return 0;
};

export const setDataTodo = (data: Todo[], setCount: (todo: Todo[]) => void) => {
  saveLocalStorage(data);
  setCount(data);
};
