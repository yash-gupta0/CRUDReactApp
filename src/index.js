// import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";
import BlogPosingHomePage from "./Pages/BlogPosingHomePage";

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React, {useState} from 'react';
import DocumentsPage from "./Pages/DocumentHomePage";
import KnowledgeBasePage from "./Pages/knowledgebasepage";
const spritemap = "icons.svg";
function App() {
  const [active, setActive] = useState('Blog Posting');
  return (
    <div>
    <ClayNavigationBar triggerLabel={active} spritemap={spritemap}>
			<ClayNavigationBar.Item active={active === 'Blog Posting'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Blog Posting');
					}}
				>
					Blog Posting
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Documents'}>
				<ClayButton
					onClick={() => setActive('Documents')}
				>
					Documents
				</ClayButton>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Knowledge Base'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Knowledge Base');
					}}
				>
					Knowledge Base
				</ClayLink>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
      {(active==='Blog Posting')?<BlogPosingHomePage/>:null}
      {(active==='Documents')?<DocumentsPage/>:null}
      {(active==='Knowledge Base')?<KnowledgeBasePage/>:null}
    </div>
  
  )
  
  
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
