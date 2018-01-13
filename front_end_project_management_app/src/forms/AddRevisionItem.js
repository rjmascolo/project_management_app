import React from 'react'
import { Input } from 'semantic-ui-react'

import { createRevisionAsset } from '../reducers/actions/actions'
import {connect} from 'react-redux'

class AddRevisionItem extends React.Component {
  state ={
      file:'',
      link:''
  }

  handleFileSubmit = (e) => {
    e.preventDefault()
    this.props.createRevisionAsset({file: this.state.file, item_type: 'file', revision_id: this.props.revisionId }, parseInt(this.props.projectId) )
    this.setState({file: ''})

  }

  handleLinkSubmit = (e) => {
    e.preventDefault()
    this.props.createRevisionAsset({file: this.state.link, item_type: 'link', revision_id: this.props.revisionId,})
    this.setState({link: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFileSubmit}>
          <h4>Enter File</h4>
          <input name="file" type="file" onChange={this.handleChange} value={this.state.file}/>
          <input type="submit" value="Upload"/>
        </form>
        <br/>
        <form onSubmit={this.handleLinkSubmit}>
          <h4>Or Enter Link</h4>
          <Input
            name="link" label='http://'
            placeholder='document-link.com'
            value={this.state.link}
            onChange={this.handleChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {createRevisionAsset: (item, projectId) => dispatch(createRevisionAsset(item, projectId))}
}

export default connect( null, mapDispatchToProps)(AddRevisionItem);
