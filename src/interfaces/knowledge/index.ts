import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface KnowledgeInterface {
  id?: string;
  title: string;
  description?: string;
  category: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface KnowledgeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  user_id?: string;
}
