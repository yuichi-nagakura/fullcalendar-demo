import './style.css';
import 'fullcalendar';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import jaLocale from '@fullcalendar/core/locales/ja';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const calendarEl = document.getElementById('calendar');
const calendar = new Calendar(calendarEl, {
  locale: jaLocale,
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek',
  },
  initialDate: new Date(),
  eventDidMount: (info) => {
    tippy(info.el, {
      content: `<strong>Date: ${info.event.startStr}</strong> <br/><span style="color: aqua;">${info.event.title}</span></strong>`,
      theme: 'light',
      allowHTML: true,
    });
  },
});

const events = [
  {
    title: 'All Day Event',
    start: '2022-02-02',
  },
  {
    title: 'Click for Google',
    url: 'http:///google.com',
    start: '2022-02-01',
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: '2022-02-03T11:00:00',
  },
  {
    groupId: '999',
    title: 'Repeating Event',
    start: '2022-02-05T11:00:00',
  },
  {
    title: 'Conference',
    start: '2022-02-07',
    end: '2022-02-10',
  },
  {
    title: 'Meeting',
    start: '2022-02-12T11:00:00',
    end: '2022-02-12T16:00:00',
  },
  {
    title: 'Lunch',
    start: '2022-02-15T12:00:00',
  },
  {
    title: 'Meeting',
    start: '2022-02-15T14:30:00',
  },
  {
    title: 'Google',
    url: 'https://google.com',
    start: '2022-02-18',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  events.forEach((event, index) => calendar.addEvent({ ...event, id: index }));
  calendar.render();
});

calendar.on('eventAdd', (info) => {
  console.log('eventAdd : ' + info.event.title);
});

calendar.on('eventClick', (info) => {
  console.log('eventClick : ' + info.event.title);
});

calendar.on('eventMouseEnter', (info) => {
  console.log('eventMouseEnter : ' + info.event.title);
});

calendar.on('eventMouseLeave', (info) => {
  console.log('eventMouseLeave : ' + info.event.title);
});

document.getElementById('clearEvents').addEventListener('click', () => {
  calendar.getEvents().forEach((event) => event.remove());
});

document.getElementById('addForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;

  if (!eventName || !eventDate) {
    alert('EventName and EventDate is required');
    return;
  }

  calendar.addEvent({
    color: '#198754',
    textColor: '#fff',
    title: eventName,
    start: eventDate,
  });

  alert('Added Event');
});
