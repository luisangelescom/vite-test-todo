import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

import type { Todo } from '../types/todo';
import { getLocalStorage, setDataTodo, sort, todoFake } from '../utils/local-storage';

interface ReturnProp {
  count: Todo[];
  setCount: Dispatch<SetStateAction<Todo[]>>;
  onChance: (id: number) => void;
  onDelete: (id: number) => void;
  reboot: () => void;
}

const useGetData = (): ReturnProp => {
  const [count, setCount] = useState<Todo[]>(todoFake);

  useEffect(() => {
    setCount(getLocalStorage());
  }, []);

  const onChance = (id: number) => {
    const t = count.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p)).sort(sort);
    setDataTodo(t, setCount);
  };

  const onDelete = (id: number) => {
    const t = count.filter((r) => r.id !== id);
    setDataTodo(t, setCount);
  };

  const reboot = () => {
    setDataTodo(todoFake, setCount);
  };

  return { count, setCount, onChance, onDelete, reboot };
};

const useGetData2 = singletonHook(
  { count: [], onChance: () => {}, onDelete: () => {}, reboot: () => {}, setCount: () => {} },
  useGetData
);

export default useGetData2;
