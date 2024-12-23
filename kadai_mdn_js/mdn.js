// 現在の日付を取得 
let currentDate = new Date(); 

// // 年、月、日を個別に取得 
let year = currentDate.getFullYear(); let month = currentDate.getMonth() + 1; 

// // 月は0から始まるため+1する 
let day = currentDate.getDate(); 

// // フォーマットして表示 
let formattedDate = `${year}年${month}月${day}日`; 

console.log(formattedDate);