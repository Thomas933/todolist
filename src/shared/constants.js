export const statuses = [
    {name: 'Open', value: 'open'},
    {name: 'In Progress', value: 'inProgress'},
    {name: 'Reopened', value: 'reopened'},
    {name: 'Resolved', value: 'resolved'},
    {name: 'Closed', value: 'closed'},
];

export const statusConvertor = (value) => {
    switch(value){
        case 'open': return 'Open';
        case 'inProgress': return 'In Progress';
        case 'reOpened': return 'Reopened';
        case 'resolved': return 'Resolved';
        case 'closed': return 'Closed';
        default: return 'Open';
    }
}

export const LOCAL_STORAGE_ITEMS_KEY = 'tasks';