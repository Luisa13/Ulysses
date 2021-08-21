


export function geDateFormat (dateStr: string):string {
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateStr);

    const dateFormat = date.getUTCDate().toString() + " " 
    +  monthNames[date.getMonth()].toString() + " " 
    + date.getFullYear().toString();

    return dateFormat;
  }