export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Tag {
  id: string;
  name: string;
  color?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: Date;
  priority?: 'low' | 'medium' | 'high';
  tags?: Tag[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskList {
  id: string;
  title: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}
