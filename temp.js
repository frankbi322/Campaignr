//write function to retrieve blob of json
//use fetch function

function fetch1() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}

async function fetch2() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

fetch2();

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
};

Survey.updateOne(
  {
    id: surveyId,
    recipients: {
      $elemMatch: {
        email: email,
        responded: false
      }
    }
  },
  {
    $inc: { [choice]: 1 },
    $set: { 'recipients.$.responded': true }
  }
);
