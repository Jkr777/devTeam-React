import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProfiles, removeError } from '../../redux/action_generators';
import DeveloperInfo from './DeveloperInfo';

const Developers = ({ user, developers, error, fetchProfiles, removeError }) => {
  let [page, changePage] = useState(1);

  useEffect(() => {
    if(!developers.length) {
      fetchProfiles(1);
    };
  }, []);

  useEffect(() => {
    if(developers.length) {
      fetchProfiles(page);
    }
  }, [page]);

  useEffect(() => {
    if(error.message) {
      removeError()
    }
  }, [removeError]);

  return (
    <section className="developers-container">
      {error.message && <p className="developers-container__error">{error.message}</p>}
      {developers.map(e => <DeveloperInfo currentUserId={user._id} key={e._id} {...e}/>)}
      <div className="developers-container__btns-container">
        <button className="developers-container__more-btn" onClick={() => changePage(page + 1)}>more</button>
        <button className="developers-container__more-btn" onClick={() => changePage(1)}>back</button>
      </div>
    </section>
  )
};

const mapStateToProps = state => ({
  user: state.user,
  developers: state.developers,
  error: state.error
});

export default connect(mapStateToProps, { fetchProfiles, removeError })(Developers);