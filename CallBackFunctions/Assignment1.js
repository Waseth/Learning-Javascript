// Assignment 1
function generateReport(studentName, grade, callback){
    console.log("Generating report for " + studentName + "...");
    callback(studentName,grade);
};
function sendToParent(name,marks){
    console.log("I just received " + name +"'s marks : " + marks);
}
generateReport("Sapo","A-",sendToParent); 