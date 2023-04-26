<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Edit Expense</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body>


	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid justify-content-between">
			<h3>Edit Expense</h3>
			<p><a href="/">Go back</a></p>
		</div>
	</nav>

	<main class="m-4 container-fluid">
		
		<div class="row">
			<form:form class="form p-4" action="/updating/${expense.id}" method="post" modelAttribute="expense">
	 		<input type="hidden" name="_method" value="put">
	 		
		 		<div class="row">
		    		<form:errors class="text-danger" path="name"/>
		    		<form:errors class="text-danger" path="vendor"/>
		    		<form:errors class="text-danger" path="amount"/>
		    		<form:errors class="text-danger" path="description"/>
		    	</div>
		 		<div class="row">
		 			
		 			<div class="col-auto">
		 				<div class="mb-3">
							<label><form:label class="col-form-label" path="name">Expense Name: </form:label></label>
		 				</div>
		 				<div class="mb-3">
							<label><form:label class="col-form-label" path="vendor">Vendor Name: </form:label></label>
		 				</div>
		 				<div class="mb-3">
							<label><form:label class="col-form-label" path="amount">Amount: </form:label></label>
		 				</div>
		 				<div class="mb-3">
							<label><form:label class="col-form-label" path="description">Description: </form:label></label>
		 				</div>
		 			</div>
		 			<div class="col-6">
	 					<p><form:input class="form-control" path="name"/></p>
	 					<p><form:input class="form-control" path="vendor"/></p>
	 					<p><form:input class="form-control" type="number" path="amount"/></p>
	 					<p><form:textarea class="form-control" path="description"/></p>
		 				<div class="d-flex justify-content-end">
		 					<button class="btn border-dark">Create</button>
		 				</div>
		 			</div>
		 			
		 		</div>
	 		
	 		</form:form>
		
		</div>
	
	</main>
</body>
</html>