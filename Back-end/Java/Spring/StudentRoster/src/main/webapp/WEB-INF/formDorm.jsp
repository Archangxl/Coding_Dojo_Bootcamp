<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New Dorm</title>
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
		<h1>New Dorms</h1>
	</header>
	
	<main class="container-fluid">
		<p><a href="/dorms">Dashboard</a></p>
		
		<form:form class="form" action="/dorms/create" method="post" modelAttribute="dorm">
	    	<div class="row mb-2">
	    		<form:errors class="text-danger" path="dormName"/>
	    	</div>
	 		<div class="row">
	 			<div class="col-6 pt-3 border border-dark">
	 				<p><form:label class="col-form-label" path="dormName">Name: </form:label></p>
	 			</div>
	 			<div class="col-6 pt-3 border border-dark">
					<p><form:input class="form-control" path="dormName"/></p>
	 			</div>
	 		</div>
	 		<div class="row">
	 			<div class="col-12 py-3 container-fluid border border-dark">
	 				<button class="container-fluid btn border-dark">Add</button>
	 			</div>
	 		</div>

		</form:form>
		
	</main>
</body>