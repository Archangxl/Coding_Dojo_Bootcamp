<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><c:out value="${dorm.name}" /></title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="m-5">
	<header class="container-fluid d-flex justify-content center">
		<h1><c:out value="${dorm.name}" /></h1>
	</header>
	
	<main class="container-fluid">
		<p><a href="/dorms">Dashboard</a></p>
		
		<form:form class="form" action="/dorms/create" method="post" modelAttribute="dorm">
	 		<div class="row">
	 			<div class="col-6 border border-dark d-flex flex-column align-items-center">
	 				<p><form:label class="pt-3  col-form-label" path="name">Students: </form:label></p>
	 				<form:select path="" class="form-select">
	 					<option></option>
	 				</form:select>	 				
	 			</div>
	 			<div class="col-6 pt-3 border border-dark d-flex align-items-center">
					<button class="container-fluid btn border-dark">Create</button>
	 			</div>
	 		</div>

		</form:form>
		
		<div class="row">
			<table class="mt-2 col-12 container-fluid table table-bordered table-striped">
				<thead>
					<tr>
						<th>Student</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<c:forEach var="student" items="${dorm.students}">
						<tr>
							<td><c:out value="${student.name}" /></td>
							<td><a href="/dorms/<c:out value="${dorm.id}" />">Remove</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</main>

</body>