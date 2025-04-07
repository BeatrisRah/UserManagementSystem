export default function (formData){
    for(const key in formData){
        if(formData[key].trim() === '')
            throw new Error('Please fill all inputs!')
    }
}