# Eventio 

Simple app witch allows registered users to sign up for and create events. The app contains 5 pages: Login, Events List, Event Detail, Create Event, User Profile.

Live demo [here](https://eventioapp.herokuapp.com/)

## Login 
List of users:
<table>
  <thead>
   <tr>
      <td>Username</td>
      <td>Password</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tonystark@eventio.com</td>
      <td>ir0nL0ver</td>
    </tr>
    <tr>
      <td>steverogers@eventio.com</td>
      <td>am3riCa</td>
    </tr>
    <tr>
      <td>blackwidow@eventio.com</td>
      <td>l0veLateX</td>
    </tr>
    <tr>
      <td>peterparker@eventio.com</td>
      <td>hat3Spid3rs</td>
    </tr>
  </tbody>
</table>

## Event List
After logging in, users is redirected to a list of all events. Each event has a brief information about its capacity and a link to more detailed information about the event (Event Detail page) as well as a button to attend the event.
##### Each event on the list include:
1. title
2. description
3. date
4. organizer
5. number of attendees / capacity
6. attend/unattend button\

## Event Detail
##### The Event Detail page include:  
1. title
2. description
3. date
4. organizer
5. number of attendees / capacity
6. list of attendees
7. attend/unattend button
8. update event button (organizer only)
9. delete button (organizer only)

## Create Event
On this page users will be able to set the title of their event, select a date, setup capacity and write a description.

## User Profile
On this page, users will be able to show a small profile about themselves and list of events that he or she is planning to attend.