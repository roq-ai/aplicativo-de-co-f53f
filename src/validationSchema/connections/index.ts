import * as yup from 'yup';

export const connectionValidationSchema = yup.object().shape({
  status: yup.string().required(),
  connection_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  connected_user_id: yup.string().nullable().required(),
});
