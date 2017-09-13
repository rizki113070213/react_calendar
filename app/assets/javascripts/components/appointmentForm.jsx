var AppointmentForm = React.createClass({
  handleChange: function(e){
    let name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit();
  },

  setApptTime(e){
    let name = 'appt_time';
    var obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function(){
    let inputProps = {
      name: 'appt_time'
    };
    return(
      <div>
        <h2>Make a new Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='title'
            placeholder='Appointment title'
            value={this.props.title}
            onChange={this.handleChange} />
          <Datetime input={false} open={true} inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setApptTime} />
          <input type='submit' value='Make Appointment' className='submit-button' />
        </form>
      </div>
    );
  }
})
