<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><c:out value="${dorm.dormName}" /></title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="m-5">
	<header class="container-fluid d-flex justify-content-center">
		<h1><c:out value="${dorm.dormName}" /></h1>
	</header>
	
	<main class="container-fluid">
		<p><a href="/dorms">Dashboard</a></p>
		
		<form:form class="form" action="/students/update/${dorm.id}" method="post" modelAttribute="student">
			<input type="hidden" path="dorm" value="<c:out value="${dorm.id}"/>">
	 		<div class="row">
	 			<div class="d-flex pb-2 justify-content-center flex-column col-6 border border-dark">
	 				<form:label class="col-form-label" path="dorm">Students: </form:label>
	 				<form:select name="id" path="id" class="form-select">
	 					<c:forEach var="student" items="${students}">
	 						<option value="<c:out value="${student.id}"/>"><c:out value="${student.studentName}"/> (<c:out value="${student.dorm.dormName}"/>)</option>
	 					</c:forEach>
		 			</form:select>	
	 			</div>
	 			<div class="d-flex align-items-center col-6 border border-dark">
					<button class="container-fluid btn border-dark">Add</button>
	 			</div>
	 		</div>

		</form:form>
		
		<div class="row">
			<table class="mt-4 col-12 container-fluid table table-bordered table-striped">
				<thead>
					<tr>
						<th>Student</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<c:forEach var="student" items="${dorm.students}">
						<tr>
							<td><c:out value="${student.studentName}" /></td>
							<td>
							<form action="/students/delete/<c:out value="${student.id}"/>" method="post">
								<input type="hidden" name="_method" value="delete">
								<button class="btn text-decoration-underline">Delete</button>
							</form>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</main>

</body>