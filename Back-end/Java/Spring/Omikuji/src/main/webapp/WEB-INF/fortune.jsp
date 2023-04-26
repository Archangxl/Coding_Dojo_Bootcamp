<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Fortune</title>
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
        <h1>Here's Your Omikuji!</h1>
    </header>
     
    <main class="d-flex flex-column border border-dark p-4 bg-info">
    	<h1><c:out value="${result}" /></h1>
    </main>
    
    <footer>
    	<p><a href="/">Go Back</a></p>
    </footer>
</body>
</html>