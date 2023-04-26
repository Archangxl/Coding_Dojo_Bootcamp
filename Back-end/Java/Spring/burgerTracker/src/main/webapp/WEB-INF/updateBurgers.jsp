<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Update Burger</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="d-flex justify-content-center m-5 flex-column">
   	<h2>Update Burger</h2>
   	<form:form class="col d-flex flex-column" action="/updating/${burger.id}" method="post" modelAttribute="burger">
  		
  		<input type="hidden" name="_method" value="put">	
  			
		<form:errors class="text-danger" path="burgerName"/>
		<label><form:label path="burgerName">Burger Name: </form:label></label>
		<p><form:input path="burgerName"/></p>
		
		<form:errors class="text-danger" path="restaurantName"/>
		<label><form:label path="restaurantName">Restaurant Name: </form:label></label>
		<p><form:input path="restaurantName"/></p>
		
		<form:errors class="text-danger" path="rating"/>
		<label><form:label path="rating">Rating </form:label></label>
		<p><form:input type="number" path="rating"/></p>
		
		<form:errors class="text-danger" path="note"/>
		<label><form:label path="note">Notes: </form:label></label>
		<p><form:textarea path="note"/></p>
  			
		<div><input type="submit" value="Update"/></div>
   	</form:form>
</body>
</html>