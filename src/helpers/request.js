class Request {

    constructor(){
      this.baseUrl = "http://localhost:8080/api"
  
    }
  
      get(url) {
        return fetch(url)
        .then((res) => res.json());
      }

      post(url, payload){
        console.log("Final payload being sent via POST:")
        console.log(payload);
        return fetch(url, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
      }
  
      // delete(url) {
      //   return fetch(url, {
      //     method: "DELETE",
      //     headers: {'Content-Type': 'application/json'}
      //   })
      // }

      // patch(url, payload){
      //   return fetch(url, {
      //     method: "PATCH",
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify(payload)
      //   })
      // }
  
  }
  
  export default Request;