// Write your code here

/**
 * Attendee object representing an event attendee
 * @type {Object}
 * @property {string} attendeeId - Unique identifier for the attendee
 * @property {string} name - Full name of the attendee
 * @property {string} event - Name of the event
 * @property {string} ticketType - Type of ticket purchased
 * @property {number} ticketPrice - Price of the ticket
 */
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

/**
 * Logs the name of the attendee
 * @param {Object} attendee - The attendee object
 * @param {string} attendee.name - The name to log
 * @throws {Error} If attendee is null, undefined, or not an object
 * @throws {Error} If attendee does not have a name property
 */
function logAttendeeName(attendee) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  if (!attendee.hasOwnProperty('name')) {
    throw new Error('Attendee object does not have a name property');
  }
  console.log(attendee.name);
}

/**
 * Logs the ticket price of the attendee
 * @param {Object} attendee - The attendee object
 * @param {number} attendee.ticketPrice - The ticket price to log
 * @throws {Error} If attendee is null, undefined, or not an object
 * @throws {Error} If attendee does not have a ticketPrice property
 */
function logTicketPrice(attendee) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  if (!attendee.hasOwnProperty('ticketPrice')) {
    throw new Error('Attendee object does not have a ticketPrice property');
  }
  console.log(attendee.ticketPrice);
}

/**
 * Updates the ticket type of the attendee
 * @param {Object} attendee - The attendee object to update
 * @param {string} newTicketType - The new ticket type
 * @throws {Error} If attendee is null, undefined, or not an object
 * @throws {Error} If newTicketType is not a non-empty string
 */
function updateTicketType(attendee, newTicketType) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  if (typeof newTicketType !== 'string' || newTicketType.trim() === '') {
    throw new Error('Ticket type must be a non-empty string');
  }
  attendee.ticketType = newTicketType;
}

/**
 * Updates the ticket price of the attendee
 * @param {Object} attendee - The attendee object to update
 * @param {number} newTicketPrice - The new ticket price
 * @throws {Error} If attendee is null, undefined, or not an object
 * @throws {Error} If newTicketPrice is not a valid positive number
 */
function updateTicketPrice(attendee, newTicketPrice) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  if (typeof newTicketPrice !== 'number' || isNaN(newTicketPrice) || newTicketPrice < 0) {
    throw new Error('Ticket price must be a valid positive number');
  }
  attendee.ticketPrice = newTicketPrice;
}

/**
 * Removes the event property from the attendee object
 * @param {Object} attendee - The attendee object to modify
 * @throws {Error} If attendee is null, undefined, or not an object
 */
function removeEventProperty(attendee) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  delete attendee.event;
}

/**
 * Adds a checkedIn property to the attendee object
 * @param {Object} attendee - The attendee object to modify
 * @throws {Error} If attendee is null, undefined, or not an object
 */
function addCheckedInProperty(attendee) {
  if (!attendee || typeof attendee !== 'object') {
    throw new Error('Invalid attendee object provided');
  }
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};