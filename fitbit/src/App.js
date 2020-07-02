import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FileDownlaod from 'js-file-download';

class FitBit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: "",
      startTime: "",
      endTime: "",
    }
  }

  handleDate = (event) => {
    this.setState({
      date: event.target.value
    });
  }

  handleStartTime = (event) => {
    this.setState({
      startTime: event.target.value
    });
  }

  handleEndTime = (event) => {
    this.setState({
      endTime: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{textAlign: "center"}}>My Fit Bit Details</h1>
        </div>
        <div style={{backgroundColor: "lightblue", padding : 100, margin : 100, textAlign: "center"}}>
          <form>
            <div>
              <h4>Enter the date : </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="YYYY-MM-DD"
                  aria-label="YYYY-MM-DD"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleDate}
                  required
                />
              </InputGroup>
            </div>
            <div>
              <h4>Enter the Start time : </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="hh:mm"
                  aria-label="hh:mm"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleStartTime}
                  required
                />
              </InputGroup>
            </div>
            <div>
              <h4>Enter the End time : </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="hh:mm"
                  aria-label="hh:mm"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleEndTime}
                  required
                />
              </InputGroup>
            </div>
            <div className="createAccount">
              <br />
              <Button type="Submit" onClick = {this.onSubmit} style={{backgroundColor: "orange"}}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FitBit



