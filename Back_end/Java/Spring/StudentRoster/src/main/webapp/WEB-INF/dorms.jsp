<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dorms</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="m-5">
	
	<header class="row container-fluid">
		<div class="d-flex justify-content-center">
			<h1>Dorms</h1>
		</div>
	</header>
	
	<main class="row container-fluid">
		<div>
			<p><a href="/dorms/new">Add a new dorm</a></p>
			<p><a href="/students/new">Add a new student</a></p>
		</div>

		<div class="container-fluid row">
			<table class="table col-12 container-fluid table-bordered table-striped">
				<thead>
					<tr>
						<th>Dorm</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<c:forEach var="dorm" items="${dorms}">
						<tr>
							<td><c:out value="${dorm.dormName}" /></td>
							<td><a href="/dorms/<c:out value="${dorm.id}" />">See Students</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</main>

</body>