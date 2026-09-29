// ambil elemen dari HTML
const inputTask = document.getElementById("inputTask");
const tombol = document.getElementById("tombol");
const listContainer = document.getElementById("listContainer");

// hitung dan tampilkan statistik
function updateStats() {
const total = listContainer.children.length;
const selesai = listContainer.getElementsByClassName("completed").length;

document.getElementById("total").innerText = total;
document.getElementById("selesai").innerText = selesai;
document.getElementById("belum").innerText = total - selesai;
}

// tambah tugas baru
function addTask() {
const teks = inputTask.value.trim();

if (teks === "") {
alert("Tugas tidak boleh kosong!");
return;
}

const li = document.createElement("li");
li.textContent = teks;

const hapus = document.createElement("span");
hapus.textContent = "×";
li.appendChild(hapus);

listContainer.appendChild(li);
inputTask.value = "";
inputTask.focus();
updateStats();
}

// klik tombol tambah
tombol.onclick = addTask;

// tekan Enter
inputTask.onkeyup = function(event) {
if (event.key === "Enter") {
addTask();
}
};

// klik tugas = selesai, klik × = hapus
listContainer.onclick = function(event) {
if (event.target.tagName === "SPAN") {
event.target.parentElement.remove();
} else {
event.target.classList.toggle("completed");
}
updateStats();
};