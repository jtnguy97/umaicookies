const formId = "1FAIpQLScVsqImSuSpRnUHzJ7MhkMyky99t1ByeBBJZnv0ZShvOdgvdg";
const entry1 = "entry.1109807722";
const entry2 = "entry.662094726";
const entry3 = "entry.526395300";
const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const getURL = function (path, params){
    const url = new URL (path);
    for (let key in params){
    url.searchParams . set (key, params [key]);
    }
    return url;
   } 
   
const postToGoogleDB = function(data){
    const path = getPath(formId);
    const url = getURL(path, data)
    sendRequest('POST', url)
    .then(responseEvent);
   } 
   
const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
   } 

   const initRequest = function(verb, url){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
   } 
   
   const responseEvent = response => email_animation.innerHTML = "message sent &#128231;";
   