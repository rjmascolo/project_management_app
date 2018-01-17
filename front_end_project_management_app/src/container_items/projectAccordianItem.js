import React from 'react'
import { Accordion, Button, Item, Icon } from 'semantic-ui-react'

import CommentForm from '../forms/CommentForm'
import Comment from '../container_items/Comment'
import AssetItem from '../container_items/AssetItem'

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
        <div>
          {props.revision.revision_items.map( (item, i) => <AssetItem key={i} item={item} projectId={props.projectId} />)}
        </div>
            <Icon id={props.revision.id} name="add" circular inverted color='teal' onClick={(e) => props.show(e)}/>
        </div>
      </div>
      <div id="comment-container">
        {props.revision.comments.map( (comment, i) => <Comment key={i} comment={comment} projectId={props.projectId} />)}
      </div>
        <CommentForm revisionId={props.revision.id} projectId={props.projectId} id="" />
    </Accordion.Content>
  </div>
 )
}

export default ProjectAccordianItem;
