<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login and Registration</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="m-5">
	<main class="row container-fluid">
        <h1>Welcome!</h1>
		<p>Join our growing community.</p>
		<div class=col-6>
			<form:form class="form" action="/register" method="post" modelAttribute="newUser">
				<h3>Register</h3>
				<div class="row">
					<div class="col-8">
						<form:label class="col-form-label" path="username">User Name:</form:label>
						<form:errors class="text-danger" path="username"/>
						<p><form:input class="form-control" path="username"></form:input></p>
						
						<form:label class="col-form-label" path="email">Email:</form:label>
						<form:errors class="text-danger" path="email"/>
						<p><form:input class="form-control" path="email"></form:input></p>
						
						<form:label class="col-form-label" path="password">Password:</form:label>
						<form:errors class="text-danger" path="password"/>
						<p><form:input type="password" class="form-control" path="password"></form:input></p>
						
						<form:label class="col-form-label" path="confirm">Confirm PW:</form:label>
						<form:errors class="text-danger" path="confirm"/>
						<p><form:input type="password" class="form-control" path="confirm"></form:input></p>
						<div class="d-flex justify-content-end">
							<button class="btn border-dark">Submit</button>
						</div>
					</div>
				</div>
			</form:form>
		</div>
		<div class=col-6>
			<form:form class="form" action="/login" method="post" modelAttribute="newLogin">
				<h3>Log in</h3>
				<div class="row">
					<div class="col-8">
						<form:label class="col-form-label" path="emailLogin">Email:</form:label>
						<form:errors class="text-danger" path="emailLogin"/>
						<p><form:input class="form-control" path="emailLogin"></form:input></p>
						 
						<form:label class="col-form-label" path="passwordLogin">Password:</form:label>
						<form:errors class="text-danger" path="passwordLogin"/>
						<p><form:input type="password" class="form-control" path="passwordLogin"></form:input></p>
						
						<div class="d-flex justify-content-end">
							<button class="btn border-dark">Submit</button>
						</div>
					</div>
				</div>
			</form:form>
		</div>
	</main>
</body>
</html>