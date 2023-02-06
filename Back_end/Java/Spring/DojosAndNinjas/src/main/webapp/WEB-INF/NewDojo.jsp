<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New Dojo</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>

	<main class="container-fluid justify-content-center">
		<h1>New Dojo</h1>
		
	    <form:form class="form p-4" action="/create/dojo" method="post" modelAttribute="dojo">
	    
	    	<div class="row">
	    		<form:errors class="text-danger" path="name"/>
	    	</div>
	    	
	 		<div class="row">
	 			
	 			<div class="col-auto">
	 				<div class="mb-3">
						<label><form:label class="col-form-label" path="name">Name: </form:label></label>
	 				</div>
	 			</div>
	 			<div class="col-6">
						<p><form:input class="form-control" path="name"/></p>
	 				<div class="d-flex justify-content-end">
	 					<button class="btn border-dark">Create</button>
	 				</div>
	 			</div>
	 			
	 		</div>
			
		</form:form>
	</main>

</body>