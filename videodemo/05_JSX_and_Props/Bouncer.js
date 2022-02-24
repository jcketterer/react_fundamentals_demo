const Bouncer = props => {
  let reply
  if (props.age < 18) {
    reply = 'Sorry kid, you cant come in'
  } else if (props.age < 21) {
    reply = 'You can enter, but no booze for you'
  } else {
    reply = (
      <p>
        Come in, you CAN drink!
        <img src="https://media.giphy.com/media/7UKLC3eNbOa3aqQd5d/giphy.gif"></img>
      </p>
    )
  }
  return (
    <div>
      <p>
        <b>Bouncher</b> How old are you?
      </p>
      <p>
        <b>You:</b> I am {props.age} years old
      </p>
      <p>
        <b>Bouncer:</b> {reply}
      </p>
    </div>
  )
}
