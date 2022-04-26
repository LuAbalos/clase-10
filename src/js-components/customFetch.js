const customFetch = (time, data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(true) {
                resolve(data);
            } else {
                reject("Error al traer data de productos")
            }
        }, time)
    });
  }
  
  export default customFetch;
  
  