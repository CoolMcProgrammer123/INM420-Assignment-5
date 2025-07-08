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
                title: 'Opening Ceremony',
                start: '2025-07-01',
                end: '2025-07-03'
            },
            {
                title: 'Mont Tremblant',
                start: '2025-07-04',
                end: '2025-07-06'
            },
            {
                title: 'Blue Mountain',
                start: '2025-07-07',
                end: '2025-07-10'
            },
            {
                title: 'Niagara Glen Trail',
                start: '2025-07-11',
                end: '2025-07-15'
            },
            {
                title: 'Wasaga Beach',
                start: '2025-07-16',
                end: '2025-07-18'
            },
            {
                title: 'Downtown',
                start: '2025-07-21',
                end: '2025-07-23'
            },
            {
                title: 'Closing',
                start: '2025-07-24'
            }
        ]
    });

    calendar.render();
});