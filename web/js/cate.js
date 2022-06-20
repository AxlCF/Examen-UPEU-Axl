$(document).ready(function () {

    listarVentas();
    listarSucursales();
    listarClientes();
    listarProductos();

    listarVendedor();


});
let xx;
let precio;

function listarVentas() {


    $.get("Tablitauwu", {"opc": 1}, function (data) {

        let x = JSON.parse(data);
        $("#tablita tbody tr").remove();
        for (let i = 0; i < x.length; i++) {
            $("#tablita").append(
                    "<tr><td>" + (i + 1) + "</td><td>" + x[i].idventa + "</td><td>" + x[i].sucursal +
                    "</td><td>" + x[i].vendedor + "</td><td>" + x[i].cliente + "</td><td>" + x[i].fecha + "</td><td><a href='#' data-target='#exampleModal' data-toggle='modal'><i class='fa-solid fa-eye'></i></a></td>");
        }

    });
}
function listarSucursales() {
    $.get("SucursalesController", {"opc": 1}, function (data)
    {
        let x = JSON.parse(data);
        for (let i = 0; i < x.length; i++) {



            $("#sucursal").append($("<option>", {
                value: x[i],
                text: x[i].direccion

            })
                    );


        }

    });

}
function listarVendedor() {
    $.get("VendedorController", {"opc": 1}, function (data)
    {
        let x = JSON.parse(data);

        for (let i = 0; i < x.length; i++) {



            $("#vendedor").append($("<option>", {
                value: x[i].idvendedor,
                text: x[i].nombre


            })
                    );


        }

    });

}


function listarClientes() {
    $.get("ClientesController", {"opc": 1}, function (data)
    {
        let x = JSON.parse(data);
        for (let i = 0; i < x.length; i++) {



            $("#clientes").append($("<option>", {
                value: x[i].idcliente,
                text: x[i].nombre


            })
                    );


        }

    });

}
















function listarProductos() {



    $.get("ProductosController", {"opc": 1}, function (data)
    {
        let x = JSON.parse(data);
        precio = x;
        for (let i = 0; i < x.length; i++) {



            $("#productos").append($("<option>", {
                value: x[i].idproducto,
                text: x[i].nombre

            })
                    );


        }

    });

}
let mostrar = () => {



    var selected = $("#productos :selected").val();

        console.log(selected);

    precio.forEach(function (elemento, indice, array) {

        if (elemento.idproducto == selected) {

            $('#productosP').val(elemento.nombre);
            $('#precio').val("S/ " + elemento.precio);
            $('#stock').val(elemento.stock);



        }

    })
};
$('#agregar').click(mostrar);