<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New Ninja</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>
	<main class="container-fluid">
		<h1>New Ninja</h1>
	    <form:form class="form p-4" action="/create/ninja" method="post" modelAttribute="ninja">
	    
	    	<div class="row">
	    		<form:errors class="text-danger" path="dojo"/>
	    	</div>
	    	<div class="row">
	    		<form:errors class="text-danger" path="firstName"/>
	    	</div>
	    	<div class="row">
	    		<form:errors class="text-danger" path="lastName"/>
	    	</div>
	    	<div class="row">
	    		<form:errors class="text-danger" path="age"/>
	    	</div>
	    	
	 		<div class="row">
	 			
	 			<div class="col-auto">
	 				<div class="mb-3">
						<label><form:label class="col-form-label" path="dojo">Dojo: </form:label></label>
	 				</div>
	 				<div class="mb-3">
						<label><form:label class="col-form-label" path="firstName">First Name: </form:label></label>
	 				</div>
	 				<div class="mb-3">
						<label><form:label class="col-form-label" path="lastName">Last Name: </form:label></label>
	 				</div>
	 				<div class="mb-3">
						<label><form:label class="col-form-label" path="age">Age: </form:label></label>
	 				</div>
	 			</div>
	 			<div class="col-6">
						<p><form:select path="dojo">
							<c:forEach var="dojo" items="${dojos}">
								<option value="<c:out value="${dojo.id}" />"><c:out value="${dojo.name}" /></option>	
							</c:forEach>
						</form:select></p>
						
						<p><form:input class="form-control" path="firstName"/></p>
						<p><form:input class="form-control" path="lastName"/></p>
						<p><form:input type="number" class="form-control" path="age"/></p>
	 				<div class="d-flex justify-content-end">
	 					<button class="btn border-dark">Create</button>
	 				</div>
	 			</div>
	 			
	 		</div>
			
		</form:form>
		
	</main>
</body>