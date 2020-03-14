import React, {  } from 'react';
import moment from 'moment';

const DeveloperExperience = props => (
  <div className="dev-experience"> 
    <span className="dev-experience__company">{props.company}</span>
    {props.current ? <span className="dev-experience__text">current job</span> : <span className="dev-experience__text">{moment(props.from).format('MMM Do Y')} - {moment(props.to).format('MMM Do Y')}</span>}
    <span className="dev-experience__text">position &bull; {props.title}</span>
  </div>
);

export default DeveloperExperience;