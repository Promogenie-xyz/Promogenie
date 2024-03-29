export const getCurrentDate=(seperator='-')=>{
    const newDate=new Date()
    const date=newDate.getDate()
    const month=newDate.getMonth()+1
    const year=newDate.getFullYear()
    return `${date}${seperator}${month<10?`0${month}`:`${month}`}${seperator}${year}`
}