<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Save Travels</title>
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
		<div class="container-fluid">
			<h3>Save Travels</h3>
		</div>
	</nav>
	
	<header class="row mx-2">
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th colspan="2">Actions</th>
				</tr>
			</thead>
			
			<tbody class="table-group-divider">
				<c:forEach var="expense" items="${expenses}">
					<tr>
						<td><a href="/view/<c:out value="${expense.id}"/>"><c:out value="${expense.name}"/></a></td>
						<td><c:out value="${expense.vendor}"/></td>
						<td>$<c:out value="${expense.amount}"></c:out></td>
						<td><a href="/update/<c:out value="${expense.id}"/>">Edit</a></td>
						<td>	
							<form action="/delete/<c:out value="${expense.getId()}"/>" method="post">
								<input type="hidden" name="_method" value="delete">
								<button class="btn text-light bg-danger border-dark">Delete</button>
							</form>
						
						</td>
					</tr>
				</c:forEach>
			</tbody>
			
		</table>
		
	</header> 
	<main class="m-4 container-fluid">
		
		<div class="row">
		    <form:form class="form p-4" action="/create" method="post" modelAttribute="expense">
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