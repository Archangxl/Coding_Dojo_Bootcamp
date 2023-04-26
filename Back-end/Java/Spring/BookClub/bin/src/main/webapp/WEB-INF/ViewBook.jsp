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
			<h1><c:out value="${book.title}" /></h1>
			<p><a href="/dashboard">back to the shelves</a></p>
		</div>
	</header>
	<main class="row container-fluid">
		<c:if test="${match != true}">
			<h4><c:out value="${book.bookshelf.user.name}" /> read <c:out value="${book.title}" /> by <c:out value="${book.author}" />.</h4>
			<p>Here are <c:out value="${book.bookshelf.user.name}" />'s thoughts:</p>
			<div class="col-1"></div>
			<div class="col-7">
				<p><c:out value="${book.thought}" /></p>
			</div>
		</c:if>
		<c:if test="${match == true}">
			<h4>You read <c:out value="${book.title}" /> by <c:out value="${book.author}" />.</h4>
			<p>Here are your thoughts:</p>
			<div class="col-1"></div>
			<div class="col-7">
				<div>
					<p><c:out value="${book.thought}" /></p>
				</div>
				<div class="d-flex justify-content-end">
					<div class="px-3">
						 <p class="btn border-dark"><a class="text-decoration-none text-dark" href="/book/view/<c:out value="${book.id}" />">Edit</a></p>
					</div>
					<form action="/book/delete/${book.id}" method="post">
						<input type="hidden" name="_method" value="delete">
						<button class="btn border-dark">Delete</button>
					</form>
				</div>
			</div>
			
		</c:if>
	</main>

</body>