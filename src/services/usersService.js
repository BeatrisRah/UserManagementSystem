import checkFromData from "../utils/checkFromData.js";

export default {
    async geAll(reqestPage = null){
        
        const limit = 10;
        const page = reqestPage || 1;
        const selection = ['image', 'firstName', 'lastName', 'email', 'company', 'role']
        
        const skip = (page - 1) * limit;
        const res =  await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=${selection.join(',')}`)
        const usesrList = await res.json()
        
        return [usesrList, limit, page]
    },

    async loginUser(userData){
        checkFromData(userData)
    }
}