import React, { Component } from 'react'
import { Accordion, Icon, Modal, Button } from 'semantic-ui-react'

import AddRevisionItem from '../forms/AddRevisionItem'
import CreateRevision from '../forms/CreateRevision'
import CommentForm from '../forms/CommentForm'
import Comment from '../container_items/Comment'

import {connect} from 'react-redux'

class RevisionsAccordian extends Component {
  state = {
    activeIndex: 0,
    revisionItemModal: {
      open: false,
      revisionId: ''
    },
    revisionModal: false
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  show = size => (e) => {
    this.setState({
        revisionItemModal:
      {
        open: true,
        revisionId: e.target.name
      }
    })
  }

  showRevision = () =>   this.setState({revisionModal: true})
  close = () => this.setState({ revisionItemModal:{open: false, revisionId: ''} })

  closeRevision = () => this.setState({ revisionModal: false })

  render() {
    const { activeIndex } = this.state
    const revisions = this.props.revisions? this.props.revisions.map( (revision, i ) => {
      return(
        <div key={i}>
        <Accordion.Title active={activeIndex === i} onClick={this.handleClick} index={i}>
          <Icon name='dropdown' />
          {revision.revision_type === "creative brief" ? "Creative Brief" : `Revision #${i}`}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === i}>
          <p>
            {revision.description}
          </p>
          <h3>Assets</h3>
          {revision.revision_items.map( item => <p key={`item${i}`} >{item.file}</p>)}
          <Button name={revision.id} onClick={this.show(revision.id)}>Enter Asset</Button>
          {revision.comments.map( (comment, i) => <Comment key={i} comment={comment} projectId={this.props.projectId} />)}
          <CommentForm revisionId={revision.id} projectId={this.props.projectId} />
        </Accordion.Content>
      </div>
      )
    }): null
    return (
      <div>
        <Button onClick={this.showRevision}>Enter Asset</Button>
        <Accordion styled>
          {revisions}
            <Modal open={this.state.revisionItemModal.open} onClose={this.close}>
               <Modal.Header>Enter In Documents</Modal.Header>
               <Modal.Content image>
                 <Modal.Description>
                   <AddRevisionItem projectId={this.props.projectId} revisionId={this.state.revisionItemModal.revisionId}/>
                 </Modal.Description>
               </Modal.Content>
             </Modal>
             <Modal open={this.state.revisionModal} onClose={this.closeRevision}>
                <Modal.Header>Add New Revision</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <CreateRevision projectId={this.props.projectId} closeRevision={this.closeRevision}/>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
        </Accordion>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    revisions: state.projects.length > 0 ? (state.projects.find(project => project.id === parseInt(props.projectId)).revisions ) : null
  }
}

// function mapDispatchToProps(dispatch) {
//   return {}
// }

export default connect(mapStateToProps)(RevisionsAccordian);
