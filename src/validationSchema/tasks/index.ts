import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.string().required(),
  assignee_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
