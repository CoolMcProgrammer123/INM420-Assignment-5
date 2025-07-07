document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    // var calendar = new FullCalendar.Calendar(calendarEl, {
    //     initialView: 'dayGridMonth'
    // });

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2025-07-07',
        headerToolbar: {
            left: false,
            center: 'title',
            right: false
        },
        footerToolbar: {
            center: 'today prev,next'
        },
        events: [
            {
                title: 'All Day Event',
                start: '2025-07-01'
            },
            {
                title: 'Long Event',
                start: '2025-07-07',
                end: '2025-07-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-07-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2025-07-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2025-07-11',
                end: '2025-07-13'
            },
            {
                title: 'Meeting',
                start: '2025-07-12T10:30:00',
                end: '2025-07-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2025-07-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2025-07-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2025-07-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'https://google.com/',
                start: '2025-07-28'
            }
        ]
    });

    calendar.render();
});