<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dojo Page</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
	<main class="container-fluid">
		<div class="container-fluid d-flex justify-content-center">
			<h1><c:out value="${dojo.name}" /></h1>
		</div>
		<div>
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<c:forEach var="ninja" items="${dojo.ninjas}">
						<tr>
							<td><c:out value="${ninja.firstName}" /></td>
							<td><c:out value="${ninja.lastName}" /></td>
							<td><c:out value="${ninja.age}" /></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</main>
</body>