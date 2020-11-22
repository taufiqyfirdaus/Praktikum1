let nama = "Taufiqy" //menyimpan data string
let umur = 16 //menyimpan data numerik
let status_menikah = false //menyimpan data boolean

const url = "http://smktelkom-mlg.sch.id"
const port = 8080

let siswa1 = {
    nis: "101",
    nama: "Ipin",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "102",
    nama: "Esan",
    jurusan: "TKJ"
}

//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);

//mengubah nama siswa 1 menjadi Ijat
siswa1.nama = "Ijat"

//menampilkan nama setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);