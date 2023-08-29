function formFunction() {
    document.getElementById("listTitle").innerHTML = "Create Event";

    const main = document.createElement('form');
    main.className = 'main';
    main.id = 'main';
    let oldElement;
    if (document.getElementById('listContainer') == null) {
        oldElement = document.getElementById('editMain');
    } else {
        oldElement = document.getElementById('listContainer');
    }
    oldElement.replaceWith(main);

    const data = createDiv();
    const row = createDiv();
    const colLabel = createDiv();
    const colEditText = createDiv();
    const nameLabel = createLabel();
    const nameInput = createInput();
    const descriptionLabel = createLabel();
    const descriptionInput = createTextArea();
    const sDaleLabel = createLabel();
    const sDaleInput = createInput();
    const eDateLabel = createLabel();
    const eDateInput = createInput();
    const imgLabel = createLabel();
    const imgInput = createInput();
    const btns = createDiv();
    const cancel = createInput();
    const add = createInput();

    createForm(main, data, row, colLabel, colEditText, nameLabel, nameInput, descriptionLabel, descriptionInput, sDaleLabel, sDaleInput, eDateLabel, eDateInput, imgLabel, imgInput, btns, cancel, add);

    cancel.addEventListener('click', function () {
        location.assign("index.html");
    });
    add.addEventListener('click', function handleClick() {
        document.getElementById('main').addEventListener('submit', submitForm);
    });

    function submitForm(e) {
        e.preventDefault();
        const name = getElementVal('areaname');
        const description = getElementVal('description');
        const sDate = getElementVal('sDate');
        const eDate = getElementVal('eDate');
        const imgPlace = getElementVal('imgPlace');

        addlocation(name, description, sDate, eDate, imgPlace);
    }
}

const addlocation = async (name, description, sDate, eDate, imgPlace) => {
    const placesRef = firebase.database().ref('places');

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
        reloadList();
        return newPlaceKey;
    } catch (error) {
        console.error("Error saving data:", error);
    }
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const createDiv = () => {
    return document.createElement('div');
}

const createInput = () => {
    return document.createElement('input');
}

const createLabel = () => {
    return document.createElement('label');
}

const createTextArea = () => {
    return document.createElement('textarea');
}

async function reloadList() {
    location.assign("index.html");
}

async function editFormFunction(placeKey) {
    document.getElementById("listTitle").innerHTML = "Edit Event";

    const editMain = document.createElement('form');
    editMain.className = 'editMain';
    editMain.id = 'editMain';
    let oldElement = document.getElementById('listContainer');
    oldElement.replaceWith(editMain);

    const data = createDiv();
    const row = createDiv();
    const colLabel = createDiv();
    const colEditText = createDiv();
    const nameLabel = createLabel();
    const nameInput = createInput();
    const descriptionLabel = createLabel();
    const descriptionInput = createTextArea();
    const sDaleLabel = createLabel();
    const sDaleInput = createInput();
    const eDateLabel = createLabel();
    const eDateInput = createInput();
    const imgLabel = createLabel();
    const imgInput = createInput();
    const btns = createDiv();
    const remove = createInput();
    const save = createInput();

    createForm(editMain, data, row, colLabel, colEditText, nameLabel, nameInput, descriptionLabel, descriptionInput, sDaleLabel, sDaleInput, eDateLabel, eDateInput, imgLabel, imgInput, btns, remove, save);
    imgLabel.style.display = 'none';
    imgInput.type = "hidden";

    const placeRef = firebase.database().ref(`places/${placeKey}`);

    const snapshot = await placeRef.once('value');
    const placeData = snapshot.val();

    // Populate the edit form fields with the place's data
    nameInput.value = placeData.name;
    descriptionInput.value = placeData.description;
    sDaleInput.value = placeData.sDate;
    eDateInput.value = placeData.eDate;

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
        try {
            await placeRef.update({
                name: name,
                description: description,
                sDate: sDate,
                eDate: eDate
            });
            reloadList();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    async function deleteData(e) {
        e.preventDefault();
        try {
            await placeRef.remove();
            reloadList();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }
}

function createForm(main, data, row, colLabel, colEditText, nameLabel, nameInput, descriptionLabel, descriptionInput, sDaleLabel, sDaleInput, eDateLabel, eDateInput, imgLabel, imgInput, btns, btn1, btn2) {
    data.className = 'data';
    main.appendChild(data);

    // First element in Form (name)
    row.className = 'row';
    data.appendChild(row);

    colLabel.className = 'col-label';
    row.appendChild(colLabel);

    colEditText.className = 'col-edit-text';
    row.appendChild(colEditText);

    nameLabel.for = 'name';
    nameLabel.innerText = 'Name';
    colLabel.appendChild(nameLabel);

    nameInput.type = 'text';
    nameInput.name = 'areaname';
    nameInput.id = 'areaname';
    nameInput.setAttribute("required", "");
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

    descriptionLabel.for = 'description';
    descriptionLabel.innerText = 'Description';
    colLabel.appendChild(descriptionLabel);

    descriptionInput.id = 'description';
    descriptionInput.name = 'description';
    descriptionInput.setAttribute("required", "");
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

    sDaleLabel.for = 'sDate';
    sDaleLabel.innerText = 'Start Date';
    colLabel.appendChild(sDaleLabel);

    sDaleInput.type = 'date';
    sDaleInput.id = 'sDate';
    sDaleInput.name = 'sDate';
    sDaleInput.setAttribute("required", "");
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

    eDateLabel.for = 'eDate';
    eDateLabel.innerText = 'End Date';
    colLabel.appendChild(eDateLabel);

    eDateInput.type = 'date';
    eDateInput.id = 'eDate';
    eDateInput.name = 'eDate';
    eDateInput.setAttribute("required", "");
    eDateInput.style = 'width:180px;';
    colEditText.appendChild(eDateInput);

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

    imgLabel.for = 'imgPlace';
    imgLabel.innerText = 'Select Image';
    colLabel.appendChild(imgLabel);

    imgInput.type = 'text';
    imgInput.id = 'imgPlace';
    imgInput.name = 'imgPlace';
    imgInput.setAttribute("required", "");
    imgInput.placeholder = 'Enter URL img...';
    imgInput.style = 'width:180px;';
    colEditText.appendChild(imgInput);

    btns.className = 'row btns';
    btns.id = 'btns';
    main.appendChild(btns);

    btn1.type = 'submit';
    if (main.className != 'main') {
        btn1.className = 'remove';
        btn1.id = 'remove';
        btn1.value = 'Delete';

    } else {
        btn1.className = 'cancel';
        btn1.id = 'cancel';
        btn1.value = 'Cancel';
    }
    btns.appendChild(btn1);

    btn2.type = 'submit';
    if (main.className != 'main') {
        btn2.className = 'save';
        btn2.id = 'save';
        btn2.value = 'Save';

    } else {
        btn2.className = 'add';
        btn2.id = 'add';
        btn2.value = 'Add';
    }
    btns.appendChild(btn2);
}