import React from 'react';
import {reduxForm, Field, SubmissionError, foucs} from 'redux-form';
import Input from './input';

class TrackingForm extends React.Component{
    render() {
        return (
            <div>
                <h1>Report a problem with your delivery</h1>
                <form>
                    <label htmlFor="name">Tracking number</label>
                    <input type="text" name="tracking-input" id="tracking-input" /><br />
                    
                </form>
            </div>
        );
    }

  
}

export default reduxForm({
    form: 'tracking',
})(TrackingForm);