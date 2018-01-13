import React from 'react'
import { Accordion, Button, Item, Icon } from 'semantic-ui-react'

import CommentForm from '../forms/CommentForm'
import Comment from '../container_items/Comment'

const ProjectAccordianItem = (props) => {
  return (
    <div>
    <Accordion.Title active={props.activeIndex === props.index} onClick={props.handleClick} index={props.index} id="revision-title">
      {props.revision.revision_type === "creative brief" ? "Creative Brief" : `Revision #${props.index}`}
      <Icon name='dropdown' />
    </Accordion.Title>
    <Accordion.Content active={props.activeIndex === props.index} id="accordian-content">
      <p>{props.revision.description}</p>
      <div>
        <h3 id="asset-header">Assets</h3>
        <div id="asset-container">
          {props.revision.revision_items.map( (item, i) => <p key={`item${i}`} >{item.file}</p>)}
          <Button name={props.revision.id} onClick={() => props.show(props.revision.id)}>Enter Asset</Button>
        </div>
      </div>
      {props.revision.comments.map( (comment, i) => <Comment key={i} comment={comment} projectId={props.projectId} />)}
      <CommentForm revisionId={props.revision.id} projectId={props.projectId} />
    </Accordion.Content>
  </div>
 )
}

export default ProjectAccordianItem;
