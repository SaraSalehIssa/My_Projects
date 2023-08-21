function formFunction() {
    document.getElementById("listTitle").innerHTML = "Create Event";

    let main = document.createElement('form');
    main.className = 'main';
    main.id = 'main';
    if (document.getElementById('listContainer') == null) {
        var oldElement = document.getElementById('editMain');
    } else {
        var oldElement = document.getElementById('listContainer');
    }
    oldElement.replaceWith(main);

    let data = document.createElement('div');
    data.className = 'data';
    main.appendChild(data);

    // First element in Form (name)
    let row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    let colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    let colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const nameLabel = document.createElement("label");
    nameLabel.for = 'name';
    nameLabel.innerText = 'Name';
    colLabel.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = 'text';
    nameInput.name = 'areaname';
    nameInput.id = 'areaname';
    nameInput.placeholder = 'Place name...';
    nameInput.style = 'width:180px;';
    colEditText.appendChild(nameInput);

    // Second element in Form (description)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = 'Description';
    colLabel.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';
    descriptionInput.placeholder = 'Write something...';
    descriptionInput.style = 'height:150px; width:180px; resize:none;';
    colEditText.appendChild(descriptionInput);

    // Third element in Form (start date)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const sDaleLabel = document.createElement("label");
    sDaleLabel.for = 'sDate';
    sDaleLabel.innerText = 'Start Date';
    colLabel.appendChild(sDaleLabel);

    const sDaleInput = document.createElement("input");
    sDaleInput.type = 'date';
    sDaleInput.id = 'sDate';
    sDaleInput.name = 'sDate';
    sDaleInput.style = 'width:180px;';
    colEditText.appendChild(sDaleInput);

    // Fourth element in Form (end date)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const eDaleLabel = document.createElement("label");
    eDaleLabel.for = 'eDate';
    eDaleLabel.innerText = 'End Date';
    colLabel.appendChild(eDaleLabel);

    const eDaleInput = document.createElement("input");
    eDaleInput.type = 'date';
    eDaleInput.id = 'eDate';
    eDaleInput.name = 'eDate';
    eDaleInput.style = 'width:180px;';
    colEditText.appendChild(eDaleInput);

    // Fifth element in Form (img)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const imgLabel = document.createElement("label");
    imgLabel.for = 'imgPlace';
    imgLabel.innerText = 'Select Image';
    colLabel.appendChild(imgLabel);

    const imgInput = document.createElement("input");
    imgInput.type = 'text';
    imgInput.id = 'imgPlace';
    imgInput.name = 'imgPlace';
    imgInput.placeholder = 'Enter URL img...';
    imgInput.style = 'width:180px;';
    colEditText.appendChild(imgInput);

    let btns = document.createElement('div');
    btns.className = 'row btns';
    btns.id = 'btns';
    main.appendChild(btns);

    const cancel = document.createElement("input");
    cancel.type = 'submit';
    cancel.className = 'cancel';
    cancel.id = 'cancel';
    cancel.value = 'Cancel';

    btns.appendChild(cancel);

    const add = document.createElement("input");
    add.type = 'submit';
    add.className = 'add';
    add.id = 'add';
    add.value = 'Add';
    btns.appendChild(add);

    cancel.addEventListener('click', function () {
        location.assign("index.html");
    });
    add.addEventListener('click', function handleClick() {
        document.getElementById('main').addEventListener('submit', submitForm);
    });

    function submitForm(e) {
        e.preventDefault();
        let name = getElementVal('areaname');
        let description = getElementVal('description');
        let sDate = getElementVal('sDate');
        let eDate = getElementVal('eDate');
        let imgPlace = getElementVal('imgPlace');

        addlocation(name, description, sDate, eDate, imgPlace);
        console.log(name, description, sDate, eDate, imgPlace);
    }
}

const addlocation = async (name, description, sDate, eDate, imgPlace) => {
    const placesRef = firebase.database().ref('places');

    if (name && description && sDate && eDate && imgPlace) {
        try {
            const newContentForm = placesRef.push();
            await newContentForm.set({
                name: name,
                description: description,
                sDate: sDate,
                eDate: eDate,
                imgPlace: imgPlace,
            });

            const newPlaceKey = newContentForm.key;

            if (window.confirm("Thank you for submission!")) {
                reloadList();
            }
            return newPlaceKey;
        } catch (error) {
            console.error("Error saving data:", error);
        }
    } else {
        window.alert("Please fill out all fields!");
    }
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

async function reloadList() {
    location.assign("index.html");
}

async function editFormFunction(placeKey) {
    document.getElementById("listTitle").innerHTML = "Edit Event";

    let editMain = document.createElement('form');
    editMain.className = 'editMain';
    editMain.id = 'editMain';
    var oldElement = document.getElementById('listContainer');
    oldElement.replaceWith(editMain);

    let data = document.createElement('div');
    data.className = 'data';
    editMain.appendChild(data);

    // First element in Form (name)
    let row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    let colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    let colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const nameLabel = document.createElement("label");
    nameLabel.for = 'name';
    nameLabel.innerText = 'Name';
    colLabel.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = 'text';
    nameInput.name = 'areaname';
    nameInput.id = 'areaname';
    nameInput.style = 'width:180px;';
    colEditText.appendChild(nameInput);

    // Second element in Form (description)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = 'Description';
    colLabel.appendChild(descriptionLabel);

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';
    descriptionInput.style = 'height:150px; width:180px;';
    colEditText.appendChild(descriptionInput);

    // Third element in Form (start date)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const sDaleLabel = document.createElement("label");
    sDaleLabel.for = 'sDate';
    sDaleLabel.innerText = 'Start Date';
    colLabel.appendChild(sDaleLabel);

    const sDaleInput = document.createElement("input");
    sDaleInput.type = 'date';
    sDaleInput.id = 'sDate';
    sDaleInput.name = 'sDate';
    sDaleInput.style = 'width:180px;';
    colEditText.appendChild(sDaleInput);

    // Fourth element in Form (end date)
    row = document.createElement("div");
    row.className = 'row';
    data.appendChild(row);

    colLabel = document.createElement("div");
    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText = document.createElement("div");
    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    const eDaleLabel = document.createElement("label");
    eDaleLabel.for = 'eDate';
    eDaleLabel.innerText = 'End Date';
    colLabel.appendChild(eDaleLabel);

    const eDaleInput = document.createElement("input");
    eDaleInput.type = 'date';
    eDaleInput.id = 'eDate';
    eDaleInput.name = 'eDate';
    eDaleInput.style = 'width:180px;';
    colEditText.appendChild(eDaleInput);

    let btns = document.createElement('div');
    btns.className = 'row btns';
    editMain.appendChild(btns);

    const remove = document.createElement("input");
    remove.type = 'submit';
    remove.id = 'remove'
    remove.className = 'remove';
    remove.value = 'Delete';
    btns.appendChild(remove);

    const save = document.createElement("input");
    save.type = 'submit';
    save.id = 'save'
    save.className = 'save';
    save.value = 'Save';
    btns.appendChild(save);

    const placeRef = firebase.database().ref(`places/${placeKey}`);

    const snapshot = await placeRef.once('value');
    const placeData = snapshot.val();

    // Populate the edit form fields with the place's data
    nameInput.value = placeData.name;
    descriptionInput.value = placeData.description;
    sDaleInput.value = placeData.sDate;
    eDaleInput.value = placeData.eDate;

    save.addEventListener('click', function handleClick() {
        document.getElementById('editMain').addEventListener('submit', submitForm);
    });
    remove.addEventListener('click', function handleClick() {
        document.getElementById('editMain').addEventListener('submit', deleteData);
    });

    async function submitForm(e) {
        e.preventDefault();
        let name = getElementVal('areaname');
        let description = getElementVal('description');
        let sDate = getElementVal('sDate');
        let eDate = getElementVal('eDate');

        console.log(name, description, sDate, eDate);
        try {
            await placeRef.update({
                name: name,
                description: description,
                sDate: sDate,
                eDate: eDate
            });

            if (window.confirm("Data updated successfully!")) {
                // They clicked ok
                reloadList();
            } else {
                // They clicked cancel, then still on the form page
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    async function deleteData(e) {
        e.preventDefault();
        try {
            await placeRef.remove();

            if (window.confirm("Data deleted successfully!")) {
                // They clicked ok
                reloadList();
            } else {
                // They clicked cancel, then still on the form page
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }
}