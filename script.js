const mataKuliahData = {
    "Teknik Informatika": {
        "1": ["Algoritma dan Pemrograman", "Matematika Diskrit", "Dasar Pemrograman"],
        "2": ["Struktur Data", "Pemrograman Berorientasi Objek", "Sistem Operasi"],
        "3": ["Rekayasa Perangkat Lunak", "Pemrograman Web", "Kecerdasan Buatan"],
        "4": ["Komputasi Awan", "Pengolahan Data Besar", "Blockchain"],
        "5": ["Machine Learning", "Sistem Keamanan", "Analisis Data"],
        "6": ["Internet of Things", "Sistem Terdistribusi", "Data Mining"],
        "7": ["Cloud Computing", "Keamanan Jaringan", "Big Data Analytics"]
    },
    "Sistem Informasi": {
        "1": ["Pengantar Sistem Informasi", "Dasar Pemrograman", "Matematika Diskrit"],
        "2": ["Pemrograman Berorientasi Objek", "Sistem Operasi", "Keamanan Sistem"],
        "3": ["Rekayasa Sistem Informasi", "Analisis dan Perancangan Sistem", "Sistem Keamanan Informasi"],
        "4": ["Manajemen TI", "Business Intelligence", "Cloud Computing"],
        "5": ["Data Mining", "Sistem Cerdas", "E-Commerce"],
        "6": ["Machine Learning", "Pengolahan Citra", "Sistem Informasi Bisnis"],
        "7": ["Blockchain", "Big Data", "Sistem Informasi Manajemen"]
    },
    "Manajemen Informatika": {
        "1": ["Dasar Pemrograman", "Sistem Informasi", "Matematika Diskrit"],
        "2": ["Sistem Operasi", "Analisis dan Perancangan Sistem", "Keamanan Jaringan"],
        "3": ["Rekayasa Sistem Informasi", "Sistem Pengelolaan Data", "Audit TI"],
        "4": ["Business Intelligence", "Cloud Computing", "Data Mining"],
        "5": ["Sistem Informasi Geografis", "Pengolahan Citra", "Keamanan Sistem TI"],
        "6": ["Machine Learning", "Rekayasa Keamanan Sistem", "Sistem Informasi Kesehatan"],
        "7": ["Big Data", "Sistem Informasi Terdistribusi", "Blockchain"]
    }
};

// Elemen DOM
const jurusanSelect = document.getElementById('jurusan');
const semesterSelect = document.getElementById('semester');
const mataKuliahSelect = document.getElementById('mata_kuliah');

// Fungsi untuk memperbarui dropdown mata kuliah
function updateMataKuliah() {
    const jurusan = jurusanSelect.value;
    const semester = semesterSelect.value;

    mataKuliahSelect.innerHTML = '<option value="" disabled selected>Pilih mata kuliah</option>';

    if (jurusan && semester) {
        const mataKuliahOptions = mataKuliahData[jurusan][semester] || [];
        mataKuliahOptions.forEach(mataKuliah => {
            const option = document.createElement('option');
            option.value = mataKuliah;
            option.textContent = mataKuliah;
            mataKuliahSelect.appendChild(option);
        });
    }
}

// Event listener untuk perubahan jurusan dan semester
jurusanSelect.addEventListener('change', updateMataKuliah);
semesterSelect.addEventListener('change', updateMataKuliah);

// Event listener untuk tombol 'Selanjutnya'
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        // Menampilkan langkah berikutnya
        let currentStep = document.querySelector('.form-step.active');
        currentStep.classList.remove('active');
        currentStep.nextElementSibling.classList.add('active');
    });
});

// Menangani pengiriman form dengan fetch
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('process_feedback.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Terima Kasih Data anda berhasil dikirim!');
            this.reset(); // Reset form setelah pengiriman sukses
        } else {
            alert('Terjadi kesalahan, coba lagi!');
        }
    })
    .catch(error => {
        alert('Terjadi kesalahan, coba lagi!');
    });
});
