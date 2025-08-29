// Assignment 2
function generateReport(studentName, grade, parentCallBack, principalCallback){
    console.log("Generating report for " + studentName + "...");
    parentCallBack(studentName, grade);
    principalCallback(studentName, grade);
}
function sendToParent(name,marks){
    console.log("Parent: I just received " + name + "'s grade: " + marks);
}
function sendToPrincipal(jina,alama){
    console.log("Principal: Noted. " + jina + " got grade: " + alama);
}
generateReport("MESSI", "A", sendToParent, sendToPrincipal)