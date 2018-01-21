import React from 'react';
import { Icon, Step, Statistic  } from 'semantic-ui-react';
import '../css/DeliverableItem.css';
import moment from 'moment';

class DelieverableUpcomingItem extends React.Component{
  fixDate = (date) => {
    return moment(date).format("M-D").split("-").join("/")
  }
  dateFromNow = (date) => {
    return moment(date).fromNow()
  }
  // onClick = () => 

  render() {
    return(
      <div id="upcoming-deliverable-item-container">
        <div id="icon-container">
          <Statistic size='small'>
            <Statistic.Value>{this.fixDate(this.props.deliverable.date)}</Statistic.Value>
            {/* <Statistic.Label>{this.dateFromNow(this.props.deliverable.date)}</Statistic.Label> */}
          </Statistic>
        </div>
        <div id="deliverable-description-container">
          <h4>{this.props.deliverable.project.name}</h4>
          {this.props.deliverable.description}
          <div id="delivery-date-info">
            {/* {this.dateFromNow(this.props.deliverable.date)} */}
          </div>
        </div>
      </div>
    )
  }
}

export default DelieverableUpcomingItem;
