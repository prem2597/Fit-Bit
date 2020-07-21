import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FileDownload from 'js-file-download';
import config from './config.js'

class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: this.props.details.startTime,
            endTime: this.props.details.endTime,
            startDate: this.props.details.startDate,  
            endDate: this.props.details.endDate,
            detailLevel: this.props.details.detailLevel,
            token: this.props.details.token,     
        }
        console.log("Time", this.state.startTime)
    }

    onheart = async (e) => {
        e.preventDefault();
        console.log('https://api.fitbit.com/1/user/-/activities/distance/date/'+this.state.startDate+'/'+this.state.endDate+'/'+this.state.detailLevel+'min/time/'+this.state.startTime+'/'+this.state.endTime+'.json')
        console.log(this.state.token)
        await axios.get('https://api.fitbit.com/1/user/-/activities/distance/date/'+this.state.startDate+'/'+this.state.endDate+'/'+this.state.detailLevel+'min/time/'+this.state.startTime+'/'+this.state.endTime+'.json', {
            headers: {
				      'Authorization': 'Bearer '+this.state.token,
            }
        }).then((resp) => {
            console.log(resp.data)
            var array = resp.data["activities-distance-intraday"]["dataset"]
            var str = 'time,value';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line !== '') line += ','
                    line += array[i][index];
                }
                str += '\r\n' + line ;
            }

            FileDownload(str, 'details.csv');
        });
    }

    onCal = async (e) => {
        e.preventDefault();
        await axios.get('https://api.fitbit.com/1/user/-/activities/calories/date/'+this.state.startDate+'/'+this.state.endDate+'/'+this.state.detailLevel+'min/time/'+this.state.startTime+'/'+this.state.endTime+'.json', {
            headers: {
				      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdHNUwiLCJzdWIiOiI4TUhUWUQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNTk0MDA0MjIzLCJpYXQiOjE1OTM5MTc4MjN9.PRidRt-fSzJKS3Ml1D6RVlvqmgLBfyx0J5AOwGyqswg',
            }
        }).then((resp) => {
            console.log(resp.data)
            var array = resp.data["activities-calories-intraday"]["dataset"]
            var str2 = 'level,mets,time,value';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line !== '') line += ','
                    line += array[i][index];
                }
                str2 += '\r\n' + line ;
            }

            FileDownload(str2, 'details.csv');
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h1 style={{textAlign: "center"}}>You can Download your Fit Bit Data Here</h1>
                </div>
                <div style={{textAlign: "center", backgroundColor: "lightblue"}}>
                    <div className="createAccount">
                        To see the distance travelled download this csv file:
                        {' '}
                        <Button type="Submit" onClick = {this.onheart} style={{backgroundColor: "orange"}}>download</Button>
                    </div>
                    <br />
                    <div className="createAccount">
                        To see the calories burned per day download this csv file:
                        {' '}
                        <Button type="Submit" onClick = {this.onCal} style={{backgroundColor: "orange"}}>download</Button>
                    </div>
                </div>
            </div>
        );
    }
}



export default SecondPage

