### SQL Validation

Given the following table `Orders`:

| OrderId | CustomerId | Product  | Amount |
| ------- | ---------- | -------- | ------ |
| 1       | C001       | Laptop   | 1200   |
| 2       | C002       | Phone    | 700    |
| 3       | C001       | Mouse    | 50     |
| 4       | C003       | Monitor  | 300    |
| 5       | C002       | Keyboard | 100    |

**Tasks:**

1. Write an SQL query that returns all orders for customer `C001`.

```
SELECT *
FROM Orders
WHERE CustomerId = 'C001';
```

2. Write an SQL query that shows the total order amount per customer.

``` 
SELECT CustomerId, SUM(Amount) AS TotalAmount
FROM Orders
GROUP BY CustomerId;
```

