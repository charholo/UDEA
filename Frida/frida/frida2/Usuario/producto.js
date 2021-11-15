var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["Rol"] = document.getElementById("Rol").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName; 
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Rol;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>;
                       <a onClick="onConsultar(this)">Consultar</a>;
                       <a onClick="onInsertarP(this)">Insertar</a>`;
                        window.alert("El registro ha sido creado con éxito");
                        console.log('Preparando envío de datos a insertar');
                        console.log(data.fullName);
                        console.log(data.empCode);
                        console.log(data.Rol);
                        console.log(data.city);
                        //.then(response=> response.json())
                        //.then (data=>mostrar(data))
                        //.catch(error => console.log(error))




                        //console.log(cell2);
                        //cell1.innerHTML = data.fullName; 

                       
}







function onConsultar() {

//Crear insertar registro 
const url ='http://192.168.0.110:4000/api/productos/listar'
const contenedor = document.querySelector('tbody');
let resultados =''

//Modal 
//const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'))
const formArticulo = document.querySelector('form')
const id = document.getElementById('fullName')
const precio = document.getElementById('empCode')

let opcion =''

fetch (url)
    .then(response=> response.json())
    .then (data=>mostrar(data))
    .catch(error => console.log(error))

    
const mostrar=(data) => {
    let body = ''
    console.log(data.productos.length)
    
    for ( let  i = 0; i < data.productos.length;i++){
        console.log(data)
        console.log("Entro al for")
        console.log(data.productos[i].precio)
        
        
        window.onload=function print(){}
        body +=`  <tr>
                    <td>${data.productos[i]._id}</td>
                    <td>${data.productos[i].id}</td>
                    <td>${data.productos[i].estado}</td>
                    <td>${data.productos[i].precio}</td>
                    <td>${data.productos[i].producto}</td>
                    <a onClick="onEdit(this)">Edite</a>
                    <a onClick="onDelete(this)">Delete</a>;
                    </tr>
                    
                    
                    
                  
                ` 
                
        console.log(body)
        

    };
    
    contenedor.innerHTML = body

    //contenedor.innerHTML= productos
    

   
}

}

//Función Insertar Productos
function onInsertarP() {
    console.log("Llego al llamado de onInsertaP")

    //Crear insertar registro 
    const request = fetch ('http://192.168.0.110:4000/api/productos/insertar',{
        method:'POST',
        mode:'cors',
        headers:{"Content-Type":"application/json"}, 
        body: JSON.stringify({
    
            id:"023",
            producto:"Charles Inserta desde Consultar_producto:D",
            precio:"1600000",
            estado:"Inactivo"
        })
    })
    request
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    //Insertar registro   

    `               <a onClick="onEdit(this)">Edite</a>
                    <a onClick="onDelete(this)">Delete</a>;
    ` 
               


    }//Cierra funcion
    
    




//








function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("Rol").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Rol").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.Rol;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Esta seguro que quiere borrar este registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

