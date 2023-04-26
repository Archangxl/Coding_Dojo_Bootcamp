<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>   
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Burger Tracker</title>
	<!-- for Bootstrap CSS -->
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<!-- YOUR own local CSS -->
	
	<!-- For any Bootstrap that uses JS or jQuery-->
	<script src="/webjars/jquery/jquery.min.js"></script>
	<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
	<!-- YOUR own local JS -->
	
</head>
<body class="d-flex justify-content-center m-5 flex-column">

    <header>
    	<h1>Burger Tracker</h1>
    </header>
    
    <main>
    	
    	<table class="table">
    
    	<thead>
    		<tr>
    			<th>Burger Name</th>
    			<th>Restaurant Name</th>
    			<th>Rating</th>
    			<th>Delete</th>
    		</tr>
    	</thead>
    	
    	<tbody>
    		<c:forEach var="burger" items="${burgers}">
				<tr>
					<td><a href="/update/<c:out value="${burger.getId()}"/>"><c:out value="${burger.burgerName}"/></a></td>
					<td><c:out value="${burger.restaurantName}"></c:out></td>
					<td><c:out value="${burger.rating}"></c:out></td>
					<td>
					
						<form action="/delete/<c:out value="${burger.getId()}"/>" method="post">
							<input type="hidden" name="_method" value="delete">
							<input type="submit" value="Delete">
						</form>
					
					</td>
				</tr>
   			</c:forEach>
    	</tbody>
   
    </table>
    
    <div class="m-5">
    	<h2>Add a Burger</h2>
    	<form:form class="col d-flex flex-column" action="/create" method="post" modelAttribute="burger">
   			
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
   			
			<div><input type="submit" value="Create"/></div>
    	</form:form>
    	
    
    </div>
    	
    </main>
    
</body>
</html>