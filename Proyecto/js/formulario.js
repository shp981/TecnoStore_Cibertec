function form(frm){
    var patron = /^[a-zA-ZÀ-ÿ\s]{1,40}/; // Letras y espacios, pueden llevar acentos

    if (!patron.test(frm.fullname.value)) {
        window.event.preventDefault();
        alert("nombre no valido");
        return
    }

    patron = /^\d{7,9}$/;
    
    if (!patron.test(frm.phone.value)) {
        window.event.preventDefault();
        alert("Ingrese un numero correcto");
        return
    }
    alert("Registrado satisfactoriamente")
    }

    function frm_1(frm){
        var correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!correo.test(frm.correo.value)) {
            window.event.preventDefault();
            alert("Ingrese el @ correcto");
            return
        }
        alert ('Suscripcion realizada exitosamente')

    }