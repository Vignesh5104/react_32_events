// Write your code here
import './index.css'

const activeEventsConstants = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {regStatus} = props

  const registerAvailableView = () => (
    <div className="register-container">
      <img
        className="register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const alreadyRegisteredView = () => (
    <div className="registered-container">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationClosedView = () => (
    <div className="registration-closed-container">
      <img
        className="registration-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-desc">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const introductionTextView = () => (
    <p className="default-value">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationStatus = () => {
    switch (regStatus) {
      case activeEventsConstants.registered:
        return alreadyRegisteredView()
      case activeEventsConstants.yetToRegister:
        return registerAvailableView()
      case activeEventsConstants.closed:
        return registrationClosedView()
      default:
        return introductionTextView()
    }
  }

  return (
    <div className="event-registration-details-container">
      {renderRegistrationStatus()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
