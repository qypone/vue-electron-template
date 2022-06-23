export function getServerInfo() {
  fetch('http://xxx.xxxx.com/rest/api/2/issue/xxx', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'xxx:xxx'
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
