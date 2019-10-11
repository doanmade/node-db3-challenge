# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM Products
join categories on Products.CategoryID = Categories.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, OrderDate, ShipperName FROM Orders
JOIN Shippers on Orders.ShipperID = Shippers.ShipperID
where OrderDate < '1997-01-09'
order by OrderDate desc

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM OrderDetails
Join Products on OrderDetails.ProductID = Products.ProductID
where OrderID = 10251
order by ProductName asc

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID as [Order Number], CustomerName as [Customer Name], LastName as [Employees Last Name] FROM [Orders]
JOIN Customers on Orders.CustomerID = Customers.CustomerID
Join Employees on Orders.EmployeeID = Employees.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
