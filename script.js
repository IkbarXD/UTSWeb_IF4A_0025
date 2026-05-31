const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const nomor = document.getElementById("nomor").value;
    const pesan = document.getElementById("pesan").value;

    const alertBox = document.getElementById("formAlert");

    if(name === "" || nomor === "" || pesan === ""){

        alertBox.innerHTML = `
            <div class="alert alert-danger mt-3">
                Semua field wajib diisi!
            </div>
        `;

    } else {

        alertBox.innerHTML = `
            <div class="alert alert-success mt-3">
                Pesan berhasil dikirim!
            </div>
        `;

        form.reset();

    }

});