import {
  Grid,
  Hidden,
  Link,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Schedules from './schedules';
import Tags from './tags';
import Ticket from './ticket';

class CommonEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMore: '',
    };
  }

  render() {
    const handleVisibility = () => {
      if (this.state.displayMore) {
        this.setState({
          displayMore: false,
        });
      } else {
        this.setState({
          displayMore: true,
        });
      }
    };

    return (
      <>
        <Grid container direction="row" alignContent='space-between'>
          <Grid item style={{padding: 15}}>
            <Grid style={{marginBottom: 10}}>
              <Typography variant='h5'>
                {this.props.children.title}
              </Typography>
            </Grid>
            <Grid style={{marginBottom: 10}}>
              <Schedules moreButton={this.state.displayMore}>
                {this.props.children.schedule}
              </Schedules>
              {this.props.children.schedule.length > 3 ?
                <Link component='button'
                  variant='body2'
                  onClick={handleVisibility}>
                  {!this.state.displayMore ? <>More</> : <>Close</>}
                </Link> : null}
            </Grid>
            <Grid style={{marginBottom: 10, marginTop: 10}}>
              <Tags event={this.props.children}>
                {this.props.children}
              </Tags>
            </Grid>
            <Hidden xsDown>
              <Grid container justify='flex-start'>
                <Ticket event={this.props.children}>
                  {this.props.children}
                </Ticket>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </>
    );
  }
}

CommonEvent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommonEvent;
