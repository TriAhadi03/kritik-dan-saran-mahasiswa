<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedback_db"; // Pastikan database ini sudah ada

$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Mengambil data dari form
$name = $_POST['name'];
$nim = $_POST['nim'];
$jurusan = $_POST['jurusan'];
$semester = $_POST['semester'];
$mata_kuliah = $_POST['mata_kuliah'];
$feedback = $_POST['feedback'];

// Menyimpan data ke database
$sql = "INSERT INTO feedback (name, nim, jurusan, semester, mata_kuliah, feedback) 
        VALUES ('$name', '$nim', '$jurusan', '$semester', '$mata_kuliah', '$feedback')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
