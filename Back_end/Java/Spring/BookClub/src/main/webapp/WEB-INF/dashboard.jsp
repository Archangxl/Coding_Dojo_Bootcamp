<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Read Share</title>
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
			<h1>Welcome, <c:out value="${user.name}!" /></h1>
			<p><a href="/logout">logout</a></p>
		</div>
		<div class="d-flex justify-content-between">
			<p>Books from everyone's shelves:</p>
			<p><a href="/bookshelf/form">Create a Bookshelf</a></p>
			<p><a href="/book/form">Create a Book</a></p>
		</div>
	</header>
	
	<main class="row container-fluid">
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author Name</th>
					<th>Posted By</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
					<tr>
						<td><c:out value="${book.id}" /></td>
						<td><a href="book/<c:out value="${book.id}" />"><c:out value="${book.title}" /></a></td>
						<td><c:out value="${book.author}" /></td>
						<td><c:out value="${book.bookshelf.user.name}" /></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
	</main>
</body>
</html>