<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>All Books</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
    <table class="table">
    
    	<thead>
    		<tr>
    			<th>ID</th>
    			<th>Title</th>
    			<th>Language</th>
    			<th>Pages</th>
    		</tr>
    	</thead>
    	
    	<tbody>
    		<c:forEach var="book" items="${books}">
				<tr>
					<td><a href="/book/<c:out value="${book.getId()}"/>"><c:out value="${book.getTitle()}"></c:out></a></td>
					<td><c:out value="${book.getDescription()}"></c:out></td>
					<td><c:out value="${book.getLanguage()}"></c:out></td>
					<td><c:out value="${book.getNumberOfPages()}"></c:out></td>
					
				</tr>
   			</c:forEach>
    	</tbody>
    	
    </table>
</body>
</html>