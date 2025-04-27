let saldo = 5000;
let opcion;

do {
    opcion = prompt(
        "Bienvenido:\n1. Ingresar\n2. Retirar\n3. Consultar saldo\n4. Salir"
    );
    realizarOperacion(opcion);
}
while (opcion !== "4");

function realizarOperacion(opcion) {
    alert("Saldo actual: " + saldo);
    switch (opcion) {
        case "1":
            const deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
            if (!isNaN(deposito) && deposito > 0) {
                saldo += deposito;
                alert("Depósito exitoso. Nuevo saldo: " + saldo);
            } else {
                alert("Monto inválido.");
            }
            break;
        case "2":
            const retiro = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (!isNaN(retiro) && retiro > 0) {
                if (retiro <= saldo) {
                    saldo -= retiro;
                    alert("Retiro exitoso. Nuevo saldo: " + saldo);
                } else {
                    alert("Saldo insuficiente.");
                }
            } else {
                alert("Monto inválido.");
            }
            break;
        case "3":
            alert("Saldo actual: " + saldo);
            break;
        case "4":
            alert("Gracias por usar la banca del rodri.");
            break;
        default:
            alert("Opción inválida.");
    }
}

