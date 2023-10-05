/**
 * const variables for server URLS
 *
 */
const serverUrl = "https://emailSender.cyclic.cloud";
const sendMethodServerUrl = "https://emailSender.cyclic.cloud/sendEmail";

/**
 * @returns true when server is running
 * @return false when sever is of
 *
 */
async function checkServer() {
  let response = await fetch(serverUrl);
  let serverResponse = await response.json();
  if (serverResponse["message"]["serverStatus"] == "running") {
    return true;
  } else {
    return false;
  }
}

async function send({fromEmail, passkey, 
toEmail,title,
subject, body}={}) {

    const response = await fetch(sendMethodServerUrl,
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  ,
            method:"POST",
            body:JSON.stringify({
               fromEmail:`${fromEmail}`,
               passkey:`${passkey}`,
               title:`${title}`,
               subject:`${subject}`,
                toEmail:`${toEmail}`,
                body:`${body}`
            })
        },    )


        const serverResponse = await response.json();
        console.log(toEmail);
        console.log(serverResponse);

}

async function main() {
  const a = await checkServer();
  console.log(a);
  send({toEmail:"afridayan01@gmail.com"});
}
main();
