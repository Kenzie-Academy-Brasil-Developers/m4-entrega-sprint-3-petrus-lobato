// import { hashSync } from 'bcryptjs'

// const createUserSchema = yup.object().shape({
    //     id: yup.string().default(() => v4()).transform(() => v4()),
    //     name: yup.string().required(),
    //     email: yup.string().email().required(),
    //     password: yup.string().min(4).required().transform((pass) => { return hashSync(pass, 10) }),
    //     module: yup.string().max(2).required(),
    //     age: yup.number().positive().required(),
    //     createdAt: yup.string().default(() => new Date().toISOString()).transform(() => new Date().toISOString()),
    // })
    
    import * as yup from 'yup';
    
    
const createCategorySchema = yup.object().shape({
    name: yup.string().required()
});

const returnCategorySchema = yup.object().shape({
    id: yup.number(),
    name: yup.string()
});


const listCategorySchema = yup.array(returnCategorySchema); 
// validação de varios obj(array) com validação do yup passado. 



export {createCategorySchema, returnCategorySchema, listCategorySchema};