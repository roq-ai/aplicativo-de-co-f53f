import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  send_date: any;
  created_at?: any;
  updated_at?: any;

  user_message_sender_idTouser?: UserInterface;
  user_message_receiver_idTouser?: UserInterface;
  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
  sender_id?: string;
  receiver_id?: string;
  content?: string;
}
