import React from 'react'

import { Icon, Modal } from 'semantic-ui-react'

import '../css/DeliverableItem.css'

import { connect } from 'react-redux'

import DeliverableItem from '../container_items/DeliverableItem'

class DeliverablesUpcoming extends React.Component {

  render() {
    // const deliverables = this.props.deliverables ? this.props.deliverables.map( (deliverable, i) => {
    //   return <DeliverableItem key={i} deliverable={deliverable} />
    // } ): null
    console.log(this.props)
    return(
      <div id="deliverable-container-outer">
        <h3>Deliverables</h3>
        <div id="deliverable-container">
          {/* {deliverables} */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  let deliverableCombined = []
  if (state.projects.length > 0) {
    state.projects.map(project => {
      project.deliverables.map ( deliverable => {
        !deliverable.done ? deliverableCombined.push( {...deliverable, project: project}) : null
      })
    })
  }
  return {
    deliverables: state.projects.length > 0 ? deliverableCombined.sort( ( a, b) => {
      if (a.date < b.date) {
        return -1
      }else if (a.date > b.date) {
      return 1
        } else {
      return 0
        }
    }) : null
  }
}

export default connect(mapStateToProps)(DeliverablesUpcoming);
