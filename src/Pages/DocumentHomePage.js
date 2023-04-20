import React, { useEffect,useState } from 'react';
import ClayButton from '@clayui/button';
import { ClayInput } from '@clayui/form';
import ImageCard from '../Widgets/imagecard';
import { getDocs } from '../Apis/request';

function DocumentsPage() {
  const [file, setFile] = useState([]);
  const handleUpload = () => {
    
    // console.log(file);
    const username = "test@liferay.com";
    const password = "test";
    const auth = btoa(`${username}:${password}`);
  
    // created a new FormData object to store the file
    const formData = new FormData();
    formData.append("file", file);
    // send a POST request to the server
    fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20124/documents/", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          window.location.reload();
      })
      .catch(error => console.error(error));
    
  };

  const [items, setUsers] = useState([]);
    useEffect(()=>{
      getDocs().then(ObjectData =>{  
        console.log(ObjectData)
        setUsers(ObjectData.items);
      })
  },[]);
    return (
    // <div style={{ textAlign: 'center' }}>
    //   <input type="file" oncnag={(e)=>handleFileUpload(e)} />
    //   {file && <p>Selected file: {file.name}</p>}
    //   {/* <ClayButton  >{"Upload"}</ClayButton> */}
    // </div>
    <div className="col-md-5"  style={{ width: '80%', margin: '0  auto ' }}>
       <ClayInput
        type="file"
        onChange={(e)=>{setFile(e.target.files[0]); }}
        >
        </ClayInput>
        <ClayButton  style={{ textAlign: 'center' }} onClick={handleUpload}>Upload</ClayButton>
        {items.map(value =>( 
           <ImageCard key={value.id} value={value} />
         ))}


    </div>
  
  ); 
}

export default DocumentsPage;