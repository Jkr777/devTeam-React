import React from 'react';
import moment from 'moment';

const ExperienceRow = props => (
  <tr>
    <td>
      <p className="experience-row">{props.title}</p>
    </td>
    <td>
      <p className="experience-row">{props.company}</p>
    </td>
    <td>
      <p className="experience-row">{props.location}</p>
    </td>
    <td>
      {props.current ? <p className="experience-row">{"current job"}</p> : <p className="experience-row">{moment(props.from).format('MMM Do Y')} - {moment(props.to).format('MMM Do Y')}</p>}
    </td>
    <td>
      <button className="experience-row__btn" onClick={() => props.removeExperience(props._id)}>Remove</button>
    </td>
  </tr>
);

export default ExperienceRow;