/*
 *
 * Dashboard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectDashboard from './selectors';
import Phase from '../../components/Phase/index';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Description of Dashboard' },
          ]}
        />
        <Phase />
        <Phase />
        <Phase />
        <Phase />
      </div>
    );
  }
}

const mapStateToProps = selectDashboard();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
