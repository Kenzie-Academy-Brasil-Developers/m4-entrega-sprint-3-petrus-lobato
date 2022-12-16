import * as yup from 'yup';

const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    id_category:yup.number().required()
});

const returnProductSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    price: yup.number(),
    id_category:yup.number()
});


const listProductSchema = yup.array(returnProductSchema); 
// validação de varios obj(array) com validação do yup passado. 


export {createProductSchema , returnProductSchema, listProductSchema};