import {combineReducers} from 'redux'
import events from './events'
import event from './event'
import tickets from './tickets'

export default combineReducers({
  events,
  event,
  tickets
})