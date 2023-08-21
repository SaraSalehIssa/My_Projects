// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPraq4tedu8F-Buz_jiOFXHPftV6yJhvs",
  authDomain: "task1firebase-119d1.firebaseapp.com",
  databaseURL: "https://task1firebase-119d1-default-rtdb.firebaseio.com",
  projectId: "task1firebase-119d1",
  storageBucket: "task1firebase-119d1.appspot.com",
  messagingSenderId: "682174520228",
  appId: "1:682174520228:web:10f5a5207f77be45e53f31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the data from db Firebase
async function DataForContainer() {
  const placesContainer = document.getElementById('listContainer');

  const placesRef = firebase.database().ref('places');

  const snapshot = await placesRef.once('value');
  const placesData = snapshot.val();

  // To create HTML elements
  for (const placeKey in placesData) {
    const place = placesData[placeKey];

    const placeDiv = document.createElement('div');
    placeDiv.className = 'place';
    placeDiv.onclick = function () {
      editFormFunction(placeKey);
    };

    const img = document.createElement('img');
    img.src = place.imgPlace;
    img.id = 'imgPlace';
    img.alt = 'Place image!';
    placeDiv.appendChild(img);

    const data = document.createElement('div');
    data.className = 'info';
    placeDiv.appendChild(data);

    const name = document.createElement('h2');
    name.id = 'name';
    name.className = 'name';
    data.appendChild(name);

    const sDate = document.createElement('p');
    sDate.id = 'sDate';
    sDate.className = 'sDate';
    data.appendChild(sDate);

    const eDate = document.createElement('p');
    eDate.id = 'eDate';
    eDate.className = 'eDate';
    data.appendChild(eDate);

    const description = document.createElement('p');
    description.id = 'description';
    data.appendChild(description);

    placeDiv.onmouseover = async function () {
      const placeRef = firebase.database().ref(`places/${placeKey}`);

      const snapshot = await placeRef.once('value');
      const placeData = snapshot.val();
      name.innerHTML = placeData.name;
      description.innerHTML = placeData.description;
      sDate.innerHTML = 'Start Date: ' + placeData.sDate;
      eDate.innerHTML = 'End Date: ' + placeData.eDate;
    };

    placesContainer.appendChild(placeDiv);
  }
}

DataForContainer();