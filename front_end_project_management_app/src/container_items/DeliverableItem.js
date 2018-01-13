import React from 'react';
import { Icon, Step  } from 'semantic-ui-react';
import '../css/DeliverableItem.css';
import moment from 'moment';

class DelieverableItem extends React.Component{
  fixDate = (date) => {
    return moment(date).format("MMM Do")
  }
  dateFromNow = (date) => {
    return moment(date).fromNow()
  }

  render() {
    return(
      <div id="deliverable-item-container">
        <div id="icon-container">
          <Icon name='calendar' size="big"/>
          <br/>
          {this.fixDate(this.props.deliverable.date)}<br/>
          <i>{this.dateFromNow(this.props.deliverable.date)}</i>
        </div>
        <div id="deliverable-description-container">
          {this.props.deliverable.description}
        </div>
      </div>
    )
  }
}

export default DelieverableItem;
