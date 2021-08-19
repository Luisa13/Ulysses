


export function geDateFormat (dateStr: string):string {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateStr.toString());
    const dateFormat = date.getDay().toString() + " " 
    +  monthNames[date.getMonth()].toString() + " " 
    + date.getFullYear().toString();

    return dateFormat;
  }