const columns = [
    {
        Header: 'Event',
        columns: [
            {
              Header: 'Date',
              accessor: 'eventDate'
            },
            {
              Header: 'Name',
              accessor: 'eventName'
            },
        ]
    },
    {
        Header: 'Names',
        columns: [
            {
                Header: 'Groom',
                accessor: 'groomName'
            },
            {
                Header: 'Bride',
                accessor: 'brideName'
            }
        ]
    },
    {
        Header: 'Wedding',
        columns: [
            {
                Header: 'Location',
                accessor: 'weddingLocation'
            },
            {
                Header: 'Date',
                accessor: 'weddingDate'
            },
            {
                Header: 'Party?',
                accessor: 'weddingParty'
            }
        ]
    },
    {
        Header: 'Colour',
        columns: [
            {
                Header: 'Wedding Theme',
                accessor: 'weddingColourTheme'
            },
            {
                Header: 'Bridesmaid\'s Dress',
                accessor: 'bridesmaidDressColour'
            },
            {
                Header: 'Preference',
                accessor: 'colourPreference'
            }
        ]
    },
    {
        Header: 'Fabric',
        columns: [
            {
                Header: 'Preference',
                accessor: 'weddingCloth'
            },
            {
                Header: 'Line',
                accessor: 'fabricLine'
            }
        ]
    }
];

export default columns