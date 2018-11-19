<?php

$country=$_GET['country'];
$all =$_GET['all'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
//global $statement;
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
if($all=="true") {
    $statement = $conn->query("SELECT * FROM countries;");
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
} else {
    $statement = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%';");
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) {
  
        if ($row['name']==$country){
            echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        }
    }
}


