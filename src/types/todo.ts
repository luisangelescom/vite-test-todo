import { Dispatch, SetStateAction } from 'react';

export interface Todo {
  id: number;
  name: string;
  checked: boolean;
}

export interface ReturnProp {
  count: Todo[];
  setCount: Dispatch<SetStateAction<Todo[]>>;
  onChance: (id: number) => void;
  onDelete: (id: number) => void;
  reboot: () => void;
}
