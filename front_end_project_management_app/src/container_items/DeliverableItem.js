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
  // changes calendar color based on date
  calendarColor = (date) => {
    const deliverDate = moment(date);
    const currentDate = moment();
    if ( currentDate.format("MMM Do") == deliverDate.format("MMM Do")) {
      return "red"
    } else if (currentDate.add(1, 'd').format("MMM Do") == deliverDate.format("MMM Do")){
      return "orange"
    } else {
      return "teal"
    }
  }

  render() {
    return(
      <div id="deliverable-item-container">
          {this.props.deliverable.done ? (
            <div id="icon-container">
              <Icon name='check' size="huge" color="green" />
            </div>
          ) : (
            <div id="icon-container">
              <Icon name='calendar' size="big" color={this.calendarColor(this.props.deliverable.date)} circular inverted/>
              <br/>
              {/* <i>{this.dateFromNow(this.props.deliverable.date)}</i> */}
            </div>
          )}
        <div id="deliverable-description-container">
          {this.props.deliverable.description}
          <div id="delivery-date-info">
            <i>Due {this.fixDate(this.props.deliverable.date)}</i>
          </div>
        </div>
      </div>
    )
  }
}

export default DelieverableItem;
