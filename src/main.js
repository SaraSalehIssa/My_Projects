function formFunction() {
    document.getElementById("listTitle").innerHTML = "Create Event";

    let main = document.createElement('div');
    main.className = 'main';
    var oldElement = document.getElementById('listContainer');
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
    imgLabel.for = 'img';
    imgLabel.innerText = 'Select Image';
    colLabel.appendChild(imgLabel);

    const imgInput = document.createElement("input");
    imgInput.type = 'file';
    imgInput.id = 'img';
    imgInput.name = 'img';
    imgInput.accept = 'image/*';
    colEditText.appendChild(imgInput);

    let btns = document.createElement('div');
    btns.className = 'row btns';
    main.appendChild(btns);

    const cancel = document.createElement("input");
    cancel.type = 'submit';
    cancel.className = 'cancel';
    cancel.value = 'Cancel';
    cancel.onclick = function() {reloadList()};
    btns.appendChild(cancel);

    const saveadd = document.createElement("input");
    saveadd.type = 'submit';
    saveadd.className = 'saveadd';
    saveadd.value = 'Save/Add';
    saveadd.onclick = function() {reloadList()};
    btns.appendChild(saveadd);
  }

  function reloadList() {
location.assign("index.html");
}

  function editFormFunction(){
    document.getElementById("listTitle").innerHTML = "Edit Event";

    let main = document.createElement('div');
    main.className = 'main';
    var oldElement = document.getElementById('listContainer');
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
    main.appendChild(btns);

    const edit = document.createElement("input");
    edit.type = 'submit';
    edit.className = 'edit';
    edit.value = 'Edit Event';
    edit.onclick = function() {reloadList()};
    btns.appendChild(edit);
  }