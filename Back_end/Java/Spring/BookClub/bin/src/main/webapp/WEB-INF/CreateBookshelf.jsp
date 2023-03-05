<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Create Bookshelf</title>
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
		<div class="d-flex justify-content-between">
			<h1>Create a Bookshelf</h1>
			<p><a href="/dashboard">back to the shelves</a></p>
		</div>
	</header>
	
	<main class="row container-fluid">
		<form:form class="form" action="/bookshelf/create" method="post" modelAttribute="newBookshelf">
			<form:input path="user" type="hidden" value="${user.id}" />
			<div class="row">
				<div class="col-8">
					<form:label class="col-form-label" path="bookShelfName">Bookshelf Name:</form:label>
					<form:errors class="text-danger" path="bookShelfName"/>
					<p><form:input class="form-control" path="bookShelfName"></form:input></p>
					
					<div class="d-flex justify-content-end">
						<button class="btn border-dark">Submit</button>
					</div>
				</div>
			</div>
		</form:form>
	</main>
</body>
</html>