export const formatDate = (date: Date) => {

    return new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).format(date);
}

export function formatedDate(date) {
    const dateData = new Date(date)
    const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = dateData.toLocaleDateString('en-US', options);
    return formattedDate;
}