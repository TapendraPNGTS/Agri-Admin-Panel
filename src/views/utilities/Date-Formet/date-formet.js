
const formatDate = (date)=>{
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
    
      const currentDate = new Date();
      const formattedDateAndTime = currentDate.toLocaleString('en-IN', options);
}

export default formatDate;