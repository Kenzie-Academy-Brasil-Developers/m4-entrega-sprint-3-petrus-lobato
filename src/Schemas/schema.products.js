import * as yup from 'yup';

const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().nullable()
});



const returuptadeProducttSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string().notRequired(),
    price: yup.number(),
    category_id:yup.string()
});


const listProductSchema = yup.array(createProductSchema); 
// validação de varios obj(array) com validação do yup passado. 


export {createProductSchema , listProductSchema, returuptadeProducttSchema};