<?php
    $link = mysql_connect('localhost','root');
    mysql_select_db('base_horas',$link);
    mysql_set_charset('utf8');

    $Alumno = mysql_query("SELECT nom_alumno FROM alumnos WHERE id_alumno=5;");
    $Alumno_array = mysql_fetch_array($Alumno);
    echo $Alumno_array;
?>