// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, selectActiveEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const selectEventClassName = isActive ? 'is-active' : ''

  const onClickEvent = () => {
    selectActiveEvent(id, registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button
        className="event-click-button"
        type="button"
        onClick={onClickEvent}
      >
        <img
          className={`event-image ${selectEventClassName}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
