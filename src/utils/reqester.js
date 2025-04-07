export default async function(url, data = null, token = null){
    const options = {}

    if(data){
        options['method'] = 'POST'
        options['body'] = JSON.stringify(data)
        options['headers'] = {'Content-type': 'application/json'}
    }

    
    const res = await fetch(url, options)
    return await res.json()
}