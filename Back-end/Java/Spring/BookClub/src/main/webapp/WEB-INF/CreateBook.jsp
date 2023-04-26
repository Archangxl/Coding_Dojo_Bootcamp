<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
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
		<form:form class="form" action="/book/create" method="post" modelAttribute="newBook">
			<div class="row">
				<div class="col-8">
					<form:label class="col-form-label" path="title">Title:</form:label>
					<form:errors class="text-danger" path="title"/>
					<p><form:input class="form-control" path="title"></form:input></p>
					
					<form:label class="col-form-label" path="author">Author:</form:label>
					<form:errors class="text-danger" path="author"/>
					<p><form:input class="form-control" path="author"></form:input></p>
					
					<form:label class="col-form-label" path="thought">Thoughts:</form:label>
					<form:errors class="text-danger" path="thought"/>
					<p><form:input class="form-control" path="thought"></form:input></p>
					
					<label class="col-form-label">Bookshelf:</label>
					<p><form:select class="form-select" path="bookshelf">
						<c:forEach var="bookshelf" items="${user.bookshelfs}">
								<form:option value="${bookshelf.id}"><c:out value="${bookshelf.bookShelfName}" /></form:option>
						</c:forEach>
					</form:select></p>
					
					<div class="d-flex justify-content-end">
						<button class="btn border-dark">Submit</button>
					</div>
				</div>
			</div>
		</form:form>
	</main>
</body>