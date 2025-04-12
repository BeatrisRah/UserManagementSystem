export default async function(url, data = null, token = null){
    const options = {}

    if(data){
        options['method'] = 'POST'
        options['body'] = JSON.stringify(data)
        options['headers'] = {'Content-type': 'application/json'}
    }

    if(token){
        options['headers'].Authorization = `Bearer ${token}`
    }
    
    const res = await fetch(url, options)
    if(!res.ok){
        const errorMessage  = await res.json()
        throw new Error(errorMessage)
    }
    return await res.json()
}