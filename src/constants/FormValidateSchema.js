import * as yup from 'yup'


export const FormValidateSchema = yup.object({
    nameTodo: yup.string().required('Please Enter Your Todo Job!')
})