<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Fruit Store</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="/CSS/fruity.css">
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	
	
</head>
<body class="d-flex m-5 justify-content-center">
	
	<main class="col-6">
		<h1 class="table-header">Fruit Store</h1>
		<table class="table">
			<thead class="t-head">
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="item" items="${items}">
				<tr>
					<td><c:out value="${item.getName()}"></c:out></td>
					<td>$<c:out value="${item.getPrice()}"></c:out></td>
				</tr>
   				</c:forEach>
			</tbody>
		</table>
	</main>
	
</body>
</html>