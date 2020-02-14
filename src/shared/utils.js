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