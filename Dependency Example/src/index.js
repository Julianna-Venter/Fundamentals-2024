import { format } from "date-fns";
//make sure to install date-fns first


const date = new Date();
console.log(format(date, "yyy-MM-dd"));