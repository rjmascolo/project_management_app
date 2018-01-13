import React from 'react'
import { Accordion, Button, Item, Icon } from 'semantic-ui-react'

import CommentForm from '../forms/CommentForm'
import Comment from '../container_items/Comment'

const ProjectAccordianItem = (props) => {
  return (
    <div>
    <Accordion.Title
      active={props.activeIndex === props.index}
      onClick={props.handleClick}
      index={props.index}
      id="revision-title"
      >
      {props.revision.revision_type === "creative brief" ? "Creative Brief" : `Revision #${props.index}`}
      <Icon name='dropdown' />
    </Accordion.Title>
    <Accordion.Content active={props.activeIndex === props.index} id="accordian-content">

      <div id="revision-description" >
        <p>{props.revision.description}</p>
      </div>

      <div>
        <div id="asset-container">
          {props.revision.revision_items.map( (item, i) => <p key={`item${i}`} >{item.file}</p>)}
          <Button name={props.revision.id} onClick={(e) => props.show(e)}>Enter Asset</Button>
        </div>
      </div>
      <div id="comment-container">
        {props.revision.comments.map( (comment, i) => <Comment key={i} comment={comment} projectId={props.projectId} />)}
      </div>
      <CommentForm revisionId={props.revision.id} projectId={props.projectId} />
    </Accordion.Content>
  </div>
 )
}

export default ProjectAccordianItem;
