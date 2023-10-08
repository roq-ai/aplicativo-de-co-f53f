import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  category: yup.string().required(),
  condition: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
