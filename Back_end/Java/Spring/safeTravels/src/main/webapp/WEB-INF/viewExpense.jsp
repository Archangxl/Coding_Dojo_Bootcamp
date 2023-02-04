<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Show Expense</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
    <nav class="navbar navbar-expand-lg">
		<div class="container-fluid justify-content-between">
			<h3>Expense Details</h3>
			<p><a href="/">Go back</a></p>
		</div>
	</nav>
	<main class="mx-3">
		<p><b>Expense name:</b> <c:out value="${expense.name }"/></p>
		<p><b>Description:</b> <c:out value="${expense.description }" /></p>
		<p><b>Vendor:</b> <c:out value="${expense.vendor }" /></p>
		<p><b>Amount:</b> $<c:out value="${expense.amount }" /></p>
	</main>
</body>
</html>