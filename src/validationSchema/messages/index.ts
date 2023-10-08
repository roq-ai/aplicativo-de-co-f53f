import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  content: yup.string().required(),
  send_date: yup.date().required(),
  sender_id: yup.string().nullable().required(),
  receiver_id: yup.string().nullable().required(),
});
