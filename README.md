# Small Business Inventory Dashboard

A responsive inventory management dashboard built from scratch using HTML, CSS, and Vanilla JavaScript.

This project was created to practice building a real-world data-driven application without using any frontend framework.

---

## 🚀 Live Demo

[View Live Demo](https://aftabstackcraft.github.io/Small-Business-Inventory/)

---

## 📌 About The Project

The Small Business Inventory Dashboard is a frontend inventory management application designed to help small businesses manage their products and monitor inventory information from a single dashboard.

The application allows users to create, update, delete, search, filter, and sort products while keeping the data persistent using browser localStorage.

The main goal of this project was not only to build the interface, but to understand how different pieces of JavaScript logic connect together to create a complete application.

---

## ✨ Features

### Product Management

- Add new products
- Edit existing products
- Delete products
- Generate unique product IDs
- Generate sequential SKU numbers
- Display products dynamically in the inventory table

### Inventory Management

- Track product stock quantities
- Display product categories
- Display product prices
- Track product status
- Detect low-stock products
- Display out-of-stock products

### Search & Filtering

- Search products by name
- Filter products by category
- Filter products by status
- Sort products by price

### Dashboard

- Total products
- Total stock
- Total stock value
- Low-stock product count
- Dynamic dashboard statistics

### Data Persistence

- Product data is stored in localStorage
- Data remains available after refreshing the page
- SKU numbering persists between sessions

### Responsive Design

- Responsive dashboard layout
- Mobile-friendly interface
- Flexible inventory table layout
- Responsive forms and controls

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage API
- Responsive Web Design

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

- Variables
- Functions
- Arrays
- Objects
- Array methods
- `filter()`
- `find()`
- `sort()`
- Template literals
- DOM manipulation
- Event listeners
- Event delegation
- Form handling
- Conditional logic
- Dynamic rendering
- `crypto.randomUUID()`
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- LocalStorage
- Data filtering and sorting
- Derived dashboard statistics

---

## 🔄 Application Flow

The core data flow of the application is:

```text
User Input
    ↓
Create Product Object
    ↓
Add Object to Products Array
    ↓
Save Data to localStorage
    ↓
Render Inventory Table
    ↓
Search / Filter / Sort
    ↓
Calculate Dashboard Statistics
