<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Rendering Books</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
    <p>Title: <c:out value="${book.getTitle()}"/></p>
    <p>Description: <c:out value="${book.getDescription() }" /></p>
    <p>Language: <c:out value="${book.getLanguage() }" /></p>
    <p>Number of Pages: <c:out value="${book.getNumberOfPages() }" /></p>
</body>
</html>