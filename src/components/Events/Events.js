import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import EventDetails from '../EventDetails/EventDetails';
import Header from '../Header/Header';

const Events = () => {
  const [events, setEvents] = useState([])
  const [matchedEvent, setMatchedEvent] = useState([])
  const { user } = useAuth();
  useEffect(() => {
    fetch('https://mysterious-ridge-48147.herokuapp.com/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  let newEvents = []

  useEffect(() => {
    if (events.length) {
      for (const singleEvent of events) {
        if (singleEvent.email === user.email) {
          newEvents.push(singleEvent)
        }
        setMatchedEvent(newEvents)
      }
    }
  }, [events])

  const handelDelete = (id) => {
    const proceed = window.confirm('Are you sure to want to delete the Event?')
    if (proceed) {
      fetch(`https://mysterious-ridge-48147.herokuapp.com/events/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged === true) {
            const remaining = matchedEvent.filter(event => event._id !== id)
            setMatchedEvent(remaining)
          }
        })
    }
  }

  return (
    <div>
      <Header />
      <div className='small-container'>
        <div className='grid grid-cols-2 gap-6 mt-8'>
          {
            matchedEvent?.map(event => <EventDetails
              key={event._id}
              event={event}
              handelDelete={handelDelete}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default Events;