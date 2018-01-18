import React from 'react'

import { Tab } from 'semantic-ui-react'

import {connect} from 'react-redux'

import EditDeliverables from '../forms/EditDeliverables'


class DeliverablesEditContainer extends React.Component {
  render() {
    console.log(this.props)

    const deliverableTab = this.props.deliverables.map( (deliverable, i) => {
      return  { menuItem: `Deliverable ${i}`, render: () => <Tab.Pane> <EditDeliverables deliverable={deliverable}/> </Tab.Pane> }
    })
    return (
      <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={deliverableTab} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    deliverables: state.projects.length > 0 ? state.projects.find(project => project.id === parseInt(props.projectId)).deliverables.sort( ( a, b) => {
      if (a.date < b.date) {
        return -1
      }else if (a.date > b.date) {
      return 1
        } else {
      return 0
        }
    }): null
  }
}

export default connect(mapStateToProps)(DeliverablesEditContainer)
