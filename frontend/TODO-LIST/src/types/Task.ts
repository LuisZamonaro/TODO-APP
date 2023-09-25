export interface Task {
  _id: string; // tudo que vem do do backend tem que por o '_' por padrão do mongo
  message: string;
  status: number;
}