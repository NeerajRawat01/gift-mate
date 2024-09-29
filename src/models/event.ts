import { User } from "./user";

export interface Event {
  id: number;
  name: string;
  date: string;
  venue: string;
  description: string;
  created_by: User;
}
