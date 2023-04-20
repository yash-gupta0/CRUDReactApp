export function getBlogPosting() {
    return  fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20124/blog-postings/',{
        headers:{
         'Authorization': 'Basic '+
         btoa('test@liferay.com:test')
        }    
     }).
     then((data)=> data.json())
}


export function getKnowledgeBase() {
    return  fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20124/knowledge-base-articles/',{
        headers:{
         'Authorization': 'Basic '+
         btoa('test@liferay.com:test')
        }    
     }).
     then((data)=> data.json())
}


export function getDocs() {
    return  fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20124/documents/',{
        headers:{
         'Authorization': 'Basic '+
         btoa('test@liferay.com:test')
        }    
     }).
     then((data)=> data.json())
}
