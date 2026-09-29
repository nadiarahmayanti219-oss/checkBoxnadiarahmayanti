console.log("bismillah praktikum JavaScript DOM dimulai");

// ===== AKTIVITAS 1: DOM SELECTION =====

// input dan tombol
const inputTugas = document.getElementById("input-tugas");
const btnTambah = document.getElementById("btn-tambah");

// daftar tugas
const daftarTugas = document.getElementById("daftar-tugas");

// jumlah tugas
const jumlahTugas = document.getElementById("jumlah-tugas");

// pesan kosong
const pesanKosong = document.getElementById("pesan-kosong");


// ===== AKTIVITAS 2: VARIABEL JUMLAH TUGAS =====

let totalTugas = 0;


// ===== AKTIVITAS 3: UPDATE JUMLAH =====

function perbaruiJumlah() {
jumlahTugas.innerText = totalTugas;

if (totalTugas === 0) {
pesanKosong.classList.remove("hidden");
} else {
pesanKosong.classList.add("hidden");
}
}


// ===== AKTIVITAS 4: TAMBAH TUGAS =====

function tambahTugas() {

// mengambil isi input
const isiTugas = inputTugas.value.trim();

// mengecek input kosong
if (isiTugas === "") {
alert("Tugas tidak boleh kosong!");
return;
}

// membuat elemen li baru
const liBaru = document.createElement("li");

// memberikan class
liBaru.className = "todo-item";

// memasukkan isi tugas
liBaru.innerHTML = `
<label class="task-content">
<input type="checkbox" class="checkbox-tugas">
<span class="teks-tugas">${isiTugas}</span>
</label>

<button class="btn-hapus">×</button>
`;


// ===== CHECKBOX =====

const checkboxTugas = liBaru.querySelector(".checkbox-tugas");

checkboxTugas.addEventListener("change", function() {

liBaru.classList.toggle("selesai");

console.log("[DOM] Status tugas diubah.");

});


// ===== TOMBOL HAPUS =====

const btnHapus = liBaru.querySelector(".btn-hapus");

btnHapus.addEventListener("click", function() {

liBaru.remove();

totalTugas--;

perbaruiJumlah();

console.log("[DOM] Tugas dihapus.");

});


// ===== MENAMPILKAN TUGAS =====

daftarTugas.appendChild(liBaru);

inputTugas.value = "";

inputTugas.focus();

totalTugas++;

perbaruiJumlah();

console.log("[DOM] Tugas berhasil ditambahkan.");

}


// ===== AKTIVITAS 5: TOMBOL TAMBAH =====

btnTambah.addEventListener("click", function() {

tambahTugas();

// mengganti warna tombol
btnTambah.classList.toggle("aktif");

});


// ===== AKTIVITAS 6: TOMBOL ENTER =====

inputTugas.addEventListener("keyup", function(event) {

if (event.key === "Enter") {

tambahTugas();

btnTambah.classList.toggle("aktif");

}

});


// ===== KONDISI AWAL =====

perbaruiJumlah();