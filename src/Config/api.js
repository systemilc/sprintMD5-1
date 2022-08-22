function api (pagina){
    return fetch(
        `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pagina}`
        ) .then(response=>{
            return response.json()
        })

    
}


export default api;