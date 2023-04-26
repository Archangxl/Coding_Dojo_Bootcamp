<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Current visit count</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
    <main>
    	<h1>You have visited <a href="/">localhost:8080</a> <c:out value="${counter}"/> times.</h1>
    	<h1><a href="/">Test another visit?</a></h1>
    	<h1><a href="/count2">Test another visit plus 2?</a></h1>
    	<form action="/reset">
    		<button class="btn-primary">Rest counter</button>
    	</form>
    	
    </main>
</body>
</html>