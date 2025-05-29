# Welcome to the Front-End Developer Test!

This practical test is designed to evaluate your ability to build a functional React.js application using TypeScript. Through this task, we aim to understand your technical skills, approach to problem-solving, and familiarity with front-end development tools and practices.

## Your Task: Build a Product Catalog Application
You will create a simple **Product Catalog** application where users can browse products, add items to shopping cart, filter items by category and sort items by price. This project will showcase your ability to:
- Initialize a React project and set up a development environment.
- Create reusable components with props and define types for them using TypeScript.
- Manage state effectively using React's useState and Context API.
- Integrate with APIs to fetch data dynamically.
- Apply basic CSS for styling the application.
- Write basic unit tests for React components.
- Use Git for version control.

## What We Expect
1. **Core Features**:
    - A **Home Page** displaying a list of products with their details (e.g., image, name, price, category). 
    - A **Shopping Cart Page** listing products added to the "Shopping Cart"
    - A **Filter and Sort Feature** allowing users to filter products by category and to sort by price.
    - **Add to Cart** and **Remove from Cart** functionality for each product.
    - **Total Price** calculation for all products in the cart.
    - **Clear Cart** button to remove all products from the cart.
2. **Technical Implementation**:
    - Fetch product data from a public mock API (https://fakestoreapi.com/). 
    - Use `useState` for local state and Context API for managing the "Shopping Cart" list. 
    - Ensure components are reusable and well-structured with appropriate TypeScript types. Example of reusable components: Button, Table, Card.
    - Implement base layout with header(with navigation), footer, and main content area. It will serve as a template for the Home and Cart pages.
    - Implement basic routing using React Router for navigation between pages.
    - Use TypeScript for static typing and defining interfaces.
3. **Styling**:
    - Create a user-friendly interface with basic CSS styling (optional: use a CSS framework like TailwindCSS or Styled-Components).
4. **Testing**:
    - Write at least one unit test using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) or Jest.
5. **Version Control**:
    - Use Git to manage your code, with a clear and meaningful commit history (tip: use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) ).

### Bonus Points
The bonus points are **optional** features that you can implement to enhance the application and showcase your skills. You can choose one or more of the following:
- **Responsive Design**: Make the application responsive for different screen sizes(mobile size it's enough). (tip: use media queries).
- **Error Handling**: Implement error handling for API requests and user interactions. (tip: show error messages to users).
- **Loading State**: Add loading indicators or skeleton screens to improve the user experience. (tip: use loading state for API requests).
- **Accessibility**: Ensure the application is accessible and follows best practices for web accessibility. (tip: use semantic HTML elements).
- **Additional Features**: Add any additional features or enhancements you think would improve the application. (tip: product details modal/page, search functionality).
- **Documentation**: Provide a README with clear instructions on how to run the application and a brief description of your approach and any important decisions made.
- **Creativity**: Feel free to add your own creative touch or features to the application.

### Super Bonus Points
If you want to go the extra mile, you can also:
- **Deployment**: Deploy the application to a hosting service like Netlify, Vercel, or GitHub Pages.
- **Testing**: Write additional unit tests to ensure the application works as expected.
- **Pagination**: Implement pagination for the product list. (tip: use query parameters for pagination).
- **Animations**: Add animations or transitions to enhance the user experience. (tip: use CSS transitions).
- **Performance Optimization**: Optimize the application for performance (e.g., lazy loading, code splitting).

## Tools
- **React.js**: Use React.js to build the application.
- **TypeScript**: Use TypeScript for static typing and defining interfaces.
- **API**: Use `fetch` to fetch product data from the [Fake Store API](https://fakestoreapi.com/).
- **React Router**: Use React Router for navigation between pages.
- **React Context**: Use React Context API for managing global state (e.g., shopping cart).

> **TIP**: To write clean, maintainable code following best practices and naming conventions, take a look at the [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) and [TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide).


## Submission
- **Delivery**: Share the GitHub repository link with us via email or any other preferred method.
- **Review**: We will review your submission and provide feedback within 7 days of receiving the link.
- **Questions**: If you have any questions or need clarification, feel free to reach out to us.
- **Good Luck!** We look forward to seeing your work and learning more about your skills and approach to front-end development.


## Evaluation Criteria
We will assess your work based on:
- **Functionality**: Correct implementation of the features listed.
- **API Integration**: Fetching data from the API and handling responses.
- **State Management**: Effective use of `useState` and `Context` for managing state.
- **Code Quality**: Clean, readable, and maintainable code with well-typed components.
- **Testing**: Basic tests to validate functionality or rendering.
- **Git Usage**: Clear and incremental commits reflecting your progress.
- **Styling**: A visually appealing and functional user interface.

## Getting started
- Clone this repository and run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.

## To Do:
### Setup the Project:
- [ ] Clone the project.
- [ ] Install the dependencies using `npm install`.
- [ ] Start the development server using `npm run dev`.
- [ ] Create the base layout for the application (header, footer, main content).
- [ ] Set up React Router for navigation between pages. (`npm install react-router-dom`)
- [ ] Create a global context for managing the shopping cart state.
- [ ] Implement basic routing for the Home Page and Shopping Cart Page. (`/`, `/cart`)
- [ ] Add basic styling to the application using CSS or a CSS framework. 

### Create the Home Page:
- [ ] Create a table or grid of cards to display the list of products.
- [ ] Fetch the product data from the API (https://fakestoreapi.com/products).
- [ ] Display the product details (image, name, price, category).
- [ ] Add a button to add the product to the shopping cart.
- [ ] Add a button to remove the product from the shopping cart.
- [ ] Implement filtering by category and sorting by price (asc/desc).
### Create the Shopping Cart Page:
- [ ] Display the list of products added to the shopping cart.
- [ ] Allow users to change the quantity of products in the cart.
- [ ] Allow users to remove products from the cart.
- [ ] Show the total price for all products in the cart.
- [ ] Add a button to clear all products from the cart.

### Bonus:
- [ ] Anything you want to add to impress us! Consider the bonus points mentioned above.

### Examples:

**List of products example**:
| Name                        | Category ^ | Price ^ | Actions        |
|-----------------------------|------------|---------|----------------|
| Solid Gold Petite Micropave | jewelery   | $168    | (-) / (+) |

**List of added products in shopping cart example**:
| Name                        | Category ^ | Price ^ | Quantity | Actions            |
|-----------------------------|------------|---------|----------|--------------------|
| Solid Gold Petite Micropave | jewelery   | $168    | 2        | (-) / (+) / Delete |


### Resources:
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React Router Documentation](https://reactrouter.com/en/main/start/tutorial)
- [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [Fake Store API](https://fakestoreapi.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
