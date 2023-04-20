import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ClayIcon from '@clayui/icon';

import "@clayui/css/lib/css/atlas.css";
import ClayForm, {ClayInput} from '@clayui/form';

import ClayButton from '@clayui/button';
import Container from "./card";
import { getDocs } from "../Apis/request";
const spritemap = "icons.svg";


const Form = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [items, setUsers] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('here'+props.inheritvar + '          '+props.blogid);
    // console.log(props.blogid);
    var type = props.inheritvar;
    var input1 = title;
    var input2 = description;
    var url='';
    if(type==='knowledgeBase')
    { 
      url = "http://localhost:8080/o/headless-delivery/v1.0/sites/20124/knowledge-base-articles"; 
    }
    if(type==='BlogPosting')
    {
      url = "http://localhost:8080/o/headless-delivery/v1.0/sites/20124/blog-postings/"; 
    }
    if(type==='updateBlogPosting')
    {
      url="http://localhost:8080/o/headless-delivery/v1.0/blog-postings/"+props.blogid;
    }
    if(type==='updateKnowledgeBase')
    {
      url="http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/"+props.blogid;
    }

    var data = {}; 
    if(type==='knowledgeBase'||type==='updateKnowledgeBase')
    { 
      data = {title: input1, articleBody: input2}; 
    }
    else {
      data = {headline: input1, articleBody: input2}; 
    }
    var username = "test@liferay.com"; 
    var password = "test"; 
    var auth = "Basic " + btoa(username + ":" + password); 
    fetch(url, {
       method : (type==='updateBlogPosting'||type==='updateKnowledgeBase')?"PUT":"POST",
        body: JSON.stringify(data), // converted data to a JSON string
        headers: {
            "Content-Type": "application/json", 
            "Authorization": auth 
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        window.location.reload();
    })
    .catch(error => {
        console.error("Error:", error);
    });
  };
	return (
        <>
        {/* <h1>{props.inheritvar}</h1> */}
        <ClayForm style={{ width: '50%', margin: '0 auto' }} onSubmit={handleSubmit}>
        <ClayForm.Group>
          <label htmlFor="title">Title</label>
          <ClayInput
            id="title"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </ClayForm.Group>
        <ClayForm.Group>
          <label htmlFor="description">Description</label>
          <ClayInput
            id="description"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </ClayForm.Group>
        <ClayButton type="submit">Submit</ClayButton>
      </ClayForm>
        </>
	);
}
export default Form;
