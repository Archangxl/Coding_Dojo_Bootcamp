<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Omikuji</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="d-flex align-items-center flex-column m-5">
    <header class="mb-3">
        <h1>Send an Omikuji!</h1>
    </header>

    <main>

        <form action="/submit" method="post" class="d-flex flex-column border border-dark p-4">
            
            <label for="number">Pick any number from 5-25</label>
            <input type="number" name="number">

            <label for="city">Enter the name of any city:</label>
            <input name="city" type="text">

            <label for="name">Enter the name of any real person:</label>
            <input name="name" type="text">

            <label for="hobby">Enter professional endeavor or hobby:</label>
            <input name="hobby" type="text">

            <label for="thing">Enter any type of living thing:</label>
            <input name="thing" type="text">

            <label for="somethingNice">Say something nice to someone:</label>
            <textarea name="somethingNice"></textarea>

            <label><i>Send and show a friend</i></label>

            <div class="d-flex justify-content-end">
                <button>Submit</button>
            </div>

        </form>

    </main>
    
</body>
</html>