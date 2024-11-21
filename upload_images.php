<?php

$mysqli = new mysqli("localhost", "u2111895_img_data", "Q}rj3:bkwP8Ah74[", "images_db");


if ($mysqli->connect_error) {
    die("Ошибка подключения: " . $mysqli->connect_error);
}


$imageRootDir = $_SERVER['DOCUMENT_ROOT'] . '/imgs';

function uploadImagesFromDirectory($dir, $mysqli) {
    $files = scandir($dir);
    foreach ($files as $file) {

        if ($file == "." || $file == "..") {
            continue;
        }

        $filePath = $dir . '/' . $file;


        if (is_dir($filePath)) {
            uploadImagesFromDirectory($filePath, $mysqli);
        } 

        elseif (is_file($filePath) && pathinfo($filePath, PATHINFO_EXTENSION) === 'webp') {
 
            $imageData = file_get_contents($filePath);

            $imageName = str_replace($_SERVER['DOCUMENT_ROOT'], '', $filePath);

      
            $stmt = $mysqli->prepare("INSERT INTO images (image_name, image_data) VALUES (?, ?)");
            $stmt->bind_param("sb", $imageName, $imageData);
            $stmt->send_long_data(1, $imageData);  


            if ($stmt->execute()) {
                echo "Файл $imageName успешно загружен в базу данных.<br>";
            } else {
                echo "Ошибка при загрузке файла $imageName: " . $stmt->error . "<br>";
            }


            $stmt->close();
        }
    }
}


uploadImagesFromDirectory($imageRootDir, $mysqli);


$mysqli->close();
?>