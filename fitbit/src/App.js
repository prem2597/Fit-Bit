import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import SecondPage from './SecondPage';

class FitBit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      detailLevel: "",
      startTime: "",
      endTime: "",
      token: "",
      viewPage: "FirstPage"
    }
  }

  handleStartDate = (event) => {
    this.setState({
      startDate: event.target.value
    });
  }

  handleEndDate = (event) => {
    this.setState({
      endDate: event.target.value
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

  handleDetailLevel = (event) => {
    this.setState({
      detailLevel: event.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    var url = window.location.href;
    var access_token = url.split("#")[1].split("=")[1].split("&")[0];
    var userId = url.split("#")[1].split("=")[2].split("&")[0];
    alert(access_token);
    console.log(access_token);
    console.log(userId);
    this.setState({
      token: access_token
    })
    
    if (this.state.startTime === '' || this.state.endTime === '' || this.state.startDate === '' || this.state.endDate === '' || this.state.detailLevel === '') {
      return
    }
    this.setState({viewPage:"secondPage"})
  }

  render() {
    if(this.state.viewPage === "secondPage") {
      return (
        <SecondPage details = {this.state}/>
      )
    }
    return (
      <div>
        <div>
          <h1 style={{textAlign: "center"}}>My Fit Bit Details</h1>
        </div>
        <div>
          <a
            href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BNC6&redirect_uri=http://localhost:3000/&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">Login to Fitbit
          </a>
        </div>
        <div style={{backgroundColor: "lightblue", padding : 100, margin : 100, textAlign: "center"}}>
          <form>
            <div>
              <h4>Enter the start date : </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="YYYY-MM-DD"
                  aria-label="YYYY-MM-DD"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleStartDate}
                  required
                />
              </InputGroup>
            </div>
            <div>
              <h4>Enter the End date : </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="YYYY-MM-DD"
                  aria-label="YYYY-MM-DD"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleEndDate}
                  required
                />
              </InputGroup>
            </div>
            <div>
              <h4>Enter the detail level range(1-15): </h4>
              <InputGroup className='mb-3'>
                <FormControl 
                  placeholder="mm"
                  aria-label="mm"
                  aria-describedby="basic-addon2"
                  onChange = {this.handleDetailLevel}
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



