<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	<link rel="stylesheet" type="text/css" href="/CSS/style.css">
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	
	<script type="text/javascript" src="/JS/app.js"></script>
</head>
<body>
	<h1 class="bg-dark text-light">Hello from JSP</h1>
	
	<% for (int i = 0; i < 5; i++) {%>
		<h1><%= i %></h1>
	<% }%>
	
	<h3>The time is: <%= new Date() %></h3>
	<h1>Two plus two is: </h1>
	<h2><c:out value="${2+2}"/></h2>
	<h3><c:out value="${dojoName}"/></h3>
	
	<h1>Dojo Locations</h1>
    <c:forEach var="oneDojo" items="${dojosFromMyController}">
        <p><c:out value="${oneDojo}"></c:out></p>
    </c:forEach>
    
</body>
</html>