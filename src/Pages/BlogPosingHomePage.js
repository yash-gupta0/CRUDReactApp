import React, { useEffect, useState } from "react";

import CardContainer from "../Widgets/card";
import { getBlogPosting} from "../Apis/request";
import Form from "../Widgets/form.js";
const BlogPosingHomePage=()=>{
    const [items, setUsers] = useState([]);
    useEffect(()=>{
      getBlogPosting().then(ObjectData =>{  
        console.log(ObjectData)
        setUsers(ObjectData.items);
      })
     },[]);
    return (   
   <div>
    <div style={{ textAlign: 'center' }}>
      <h1>Add Blog Posting Data</h1>
    </div>
   <Form inheritvar="BlogPosting"/>
   <div style={{ textAlign: 'center' }}>
      <h1>Get Blog Posting Data</h1>
    </div>
    {items.map(value =>(
    <CardContainer key={value.id} value={value} inheritvar="BlogPosting"/>
    ))}
	</div>
    );
}

export default BlogPosingHomePage;