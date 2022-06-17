export function getServerInfo() {
  // fetch('http://jira1.travelsky.com/rest/api/2/serverInfo', {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': `Basic ${Buffer.from(
  //       'qyp:ab79147649C@'
  //     ).toString('base64')}`,
  //     'Accept': 'application/json'
  //   },
  //   // credentials: 'include',
  //   // mode: 'no-cors'
  // })
  //   .then(response => {
  //     console.log(response);
  //     return response.text();
  //   })
  //   .then(text => console.log(text))
  //   .catch(err => console.error(err));

  fetch('http://jira1.travelsky.com/rest/api/2/issue/CDP-39039', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'qyp:ab79147649C@'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
}
