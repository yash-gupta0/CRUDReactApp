import React from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import ClayIcon from '@clayui/icon';
import ModalSheet from './modal';


const DeleteCard = (ges,type)=>
{

const username = 'test@liferay.com';
const password = 'test';
console.log(type);
var url='';
    if(type==='knowledgeBase')
    { 
     url='http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/'+ges;
    }
    else {
      url = 'http://localhost:8080/o/headless-delivery/v1.0/blog-postings/'+ges; 
    }


// const url = 'http://localhost:8080/o/headless-delivery/v1.0/blog-postings/'+ges;
// const url ='http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/'+ges;

fetch(url, {
  method: 'DELETE',
  headers: {
    'Authorization': 'Basic ' + btoa(username + ':' + password)
  }
})
.then(response => {
  if (response.ok) {
    console.log('Delete successful');
    window.location.reload();
  } else {
    console.log('Delete failed');
  }
})
.catch(error => {
  console.error('Error:', error);
});
     
}
const CardContainer = (props) => {
  console.log('card cointainer' +props.inheritvar);
  return (
    <div className="col-md-5"  style={{ width: '50%', margin: '0 auto' }}>
    <ClayCard>
      <ClayCard.Body>
        <ClayCard.Description displayType="title">
        {props.inheritvar==='BlogPosting'}{props.value.headline}
          {props.value.title}
        </ClayCard.Description>
        <ClayCard.Description truncate={false} displayType="text">
          {props.value.articleBody}
        </ClayCard.Description>
        <div style={{ padding:'0px 0px 10px 0' }}>
        <ClayButton displayType="danger" onClick={()=> DeleteCard(props.value.id,props.inheritvar)}>{"Delete"}</ClayButton>
       
        </div>
        
        <ModalSheet inheritvar={props.inheritvar} blogid={props.value.id} />        
      </ClayCard.Body>
    </ClayCard>
  </div>
  );
};

export default CardContainer;