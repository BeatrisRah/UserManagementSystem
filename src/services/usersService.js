import checkFromData from "../utils/checkFromData.js";
import reqester from "../utils/reqester.js";

export default {
    async geAll(reqestPage = null){
        
        const limit = 10;
        const page = reqestPage || 1;
        const selection = ['image', 'firstName', 'lastName', 'email', 'company', 'role']
        
        const skip = (page - 1) * limit;
        const usesrList =  await reqester(`https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=${selection.join(',')}`)
        
        return [usesrList, limit, page]
    },

    async loginUser(userData){
        checkFromData(userData)

        const result = await reqester('https://dummyjson.com/user/login', userData)
        const userFullInfo = await reqester(`https://dummyjson.com/users/${result.id}`) //json dummy doesnt return role on default

        return {
            token: result.accessToken,
            role: userFullInfo.role
        };
    }
}