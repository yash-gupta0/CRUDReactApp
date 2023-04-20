import React, { useEffect, useState } from "react";
import Form from "../Widgets/form.js";
import { getKnowledgeBase} from "../Apis/request";
import CardContainer from "../Widgets/card";
const KnowledgeBasePage=()=> {
  const [items, setUsers] = useState([]);
    useEffect(()=>{
      getKnowledgeBase().then(ObjectData =>{  
        console.log(ObjectData)
        setUsers(ObjectData.items);
      })
     },[]);    
    return (
      <div>
          <div style={{ textAlign: 'center' }}>
          <h1>Add Knowledge Base Article </h1>
          </div>
          <Form inheritvar="knowledgeBase"/>
          <div style={{textAlign: 'center'}}>
          <h1>Get Knowledge Base Data</h1>
          </div>
          {items.map(value =>(
            <CardContainer key={value.id} value={value} inheritvar="knowledgeBase" />
          ))}
      </div>
    )
  }
  export default KnowledgeBasePage;