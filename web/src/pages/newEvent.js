/* global google*/
import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button, InputBase, Paper, Input, InputAdornment, InputLabel, FormControl, Select} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const {compose, withProps, lifecycle} = require('recompose');
const {withScriptjs} = require('react-google-maps');
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

const PlacesWithStandaloneSearchBox = compose(
    withProps({
      googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYCUYRSjpYlmrt3HvFOTK5mkfu7y8M_7A&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{height: `100%`}} />,
      containerElement: <div style={{height: `400px`}} />,
    }),
    lifecycle({
      componentWillMount() {
        const refs = {};

        this.setState({
          places: [],
          onSearchBoxMounted: (ref) => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();

            this.setState({
              places,
            });
          },
        });
      },
    }),
    withScriptjs,
)((props) => (
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
    <ol>
      {props.places.map(
          ({place_id, formatted_address, geometry: {location}}) => (
            <li key={place_id}>
              {formatted_address}
              {' at '}
                        ({location.lat()}, {location.lng()})
            </li>
          ),
      )}
    </ol>
  </div>
));

class NewEvent extends Component {
  render() {
    const selectedDate = new Date();
    console.log('date:', selectedDate);

    return (
      <Container maxWidth='lg'>
        newEvent page
        <Typography variant='h6' style={{color: '#009688'}}>
              Event Information
        </Typography>
        <div>
          <TextField
            id="standard-full-width"
            label="Title"
            style={{margin: 8}}
            placeholder="Title of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="standard-full-width"
            label="Description"
            style={{margin: 8}}
            placeholder="Description of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
            variant="outlined"
          />
          <input
            accept="image/*"
            style={{display: 'none'}}
            id="raised-button-file"
            type="file"
            onChange={(event) => {
              console.log(event.target.files);

              const fileReader = new FileReader();

              fileReader.readAsDataURL(event.target.files[0]);
              fileReader.onload = (e) => {
                console.log(e.target.result);
              };
            }}
          />
          <label htmlFor="raised-button-file" style={{width: '100%', margin: 8}}>
            <Paper elevation={3} variant="outlined" component="form" margin="normal">
              <Button variant="raised" component="span">
                Upload
              </Button>
              <InputBase
                placeholder="Select Thumbnail Image"
              />
            </Paper>
          </label>

          <TextField
            label="Price"
            id="standard-start-adornment"
            fullWidth
            margin="normal"
            style={{margin: 8}}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />

          <FormControl fullWidth margin="normal" style={{margin: 8}}>
            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
            <Select
              native
              onChange={0}
              inputProps={{
                name: 'Type',
                id: 'age-native-simple',
              }}
            >
              <option value={0}>Book Club</option>
            </Select>
          </FormControl>
        </div>

        <br/>

        <Typography variant='h6' style={{color: '#009688'}}>
          Book Club Information
        </Typography>

        <div>
          <TextField
            id="standard-full-width"
            label="Book title"
            style={{margin: 8}}
            placeholder="Title of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Book author"
            style={{margin: 8}}
            placeholder="Author of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Book description"
            style={{margin: 8}}
            placeholder="Description of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
          />
        </div>

        <Typography variant='h6' style={{color: '#009688'}}>
          Schedule Information
        </Typography>

        <div>
          <Paper>
            <PlacesWithStandaloneSearchBox isMarkerShown />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                label="Start datetime"
                value={selectedDate}
                onChange={0}
                fullWidth
              />
              <DateTimePicker
                label="End datetime"
                value={selectedDate}
                onChange={0}
                fullWidth
              />
            </MuiPickersUtilsProvider>
            <Button variant="outlined" color="secondary">
              Add Schedule
            </Button>
          </Paper>
        </div>
      </Container>
    );
  }
}

export default NewEvent;
