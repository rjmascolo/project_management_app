import React from 'react'
import { Icon, Grid, Step } from 'semantic-ui-react'
import '../css/DeliverableItem.css'

import {connect} from 'react-redux'
import DeliverableItem from '../container_items/DeliverableItem'

class DeliverablesContainer extends React.Component {
  render() {
    const deliverables = this.props.deliverables ? this.props.deliverables.map( (deliverable, i) => {
      return <DeliverableItem key={i} deliverable={deliverable} />
    } ): null
    console.log(this.props)
    return(
      <div id="deliverable-container">

        {deliverables}
        
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    deliverables: state.projects.length > 0 ? state.projects.find(project => project.id === parseInt(props.projectId)).deliverables: null
  }
}

export default connect(mapStateToProps)(DeliverablesContainer);
