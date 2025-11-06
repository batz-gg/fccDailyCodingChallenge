const getWeekday = dateString => new Date(dateString).toLocaleString('en-US', { weekday: 'long' });

console.log(getWeekday("2025-11-06"))