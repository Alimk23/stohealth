//edit data diri pengguna
$(function () {
    $(".modal-editDataDiriPengguna").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/user/data-diri/getDataUser",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                $("#nama").val(data.name);
                $("#emailUser").val(data.email);
                $("#tempat_lahir").val(data.birth_place);
                $("#tanggal_lahir").val(data.birth_date);
                $("#genderEdit").val(data.gender);
                $("#alamatUser").val(data.address);
            },
        });
    });
});
//edit data pengguna
$(function () {
    $(".modal-editDataPengguna").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/admin/data-pengguna/getRoleUser",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                $("#editUserId").val(data.id);
                $("#editRole").val(data.role);
            },
        });
    });
});
//show data pengguna
$(function () {
    $(".modal-showDataPengguna").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/admin/history/getDataUser",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#showName").val(data.name);
                $("#showEmail").val(data.email);
                $("#showBirthPlace").val(data.birth_place);
                $("#showBirthDate").val(data.birth_date);
                $("#showGender").val(data.gender);
                $("#showAddress").val(data.address);
            },
        });
    });
});
//get data penyakit Admin
$(function () {
    $(".modal-getDataPenyakit").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/admin/data-penyakit/getDataPenyakit",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                $("#editIdPenyakit").val(data.id);
                $("#editNamaPenyakit").val(data.nama_penyakit);
                $("#editGejala1").val(data.gejala1);
                $("#editGejala2").val(data.gejala2);
                $("#editGejala3").val(data.gejala3);
                $("#editGejala4").val(data.gejala4);
                $("#editSaranDokter").val(data.saran_dokter);
                $("#showSaran_dokter").val(data.saran_dokter);
            },
        });
    });
});
//show saran dokter User
$(function () {
    $(".userModal-showSaranDokter").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/user/data-pemeriksaan/getSaranDokter",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                $("#editNamaPenyakit").val(data.nama_penyakit);
                $("#editGejala1").val(data.gejala1);
                $("#editGejala2").val(data.gejala2);
                $("#editGejala3").val(data.gejala3);
                $("#editGejala4").val(data.gejala4);
                $("#editSaranDokter").val(data.saran_dokter);
                $("#showSaran_dokter").val(data.saran_dokter);
            },
        });
    });
});
//show all feedback
$(function () {
    $(".modal-feedbackFeedback").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            url: "http://localhost:8000/admin/getFeedback",
            data: { id: id },
            method: "get",
            dataType: "json",
            success: function (data) {
                $("#feedbackMessages").val(data.message);
            },
        });
    });
});
