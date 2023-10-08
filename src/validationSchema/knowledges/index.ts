import * as yup from 'yup';

export const knowledgeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  category: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
