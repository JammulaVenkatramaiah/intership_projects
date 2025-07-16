// src/data/blogPosts.js

// Mock data for blog posts
const initialBlogPosts = [
  { id: '1', title: 'Getting Started with React Hooks', content: 'React Hooks allow you to use state and other React features without writing a class. useState and useEffect are fundamental for managing state and side effects in functional components. They simplify component logic and improve reusability.', author: 'Alice' },
  { id: '2', title: 'Understanding React\'s Virtual DOM', content: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct DOM manipulations. When state changes, React first updates the Virtual DOM, then efficiently calculates the differences and updates only the necessary parts of the real DOM.', author: 'Bob' },
  { id: '3', title: 'Styling in React with Tailwind CSS', content: 'Tailwind CSS is a utility-first CSS framework that makes it easy to style React applications quickly and consistently. Instead of writing custom CSS, you apply pre-defined utility classes directly in your JSX, leading to highly customizable designs.', author: 'Charlie' },
  { id: '4', title: 'Introduction to React Router', content: 'React Router is essential for building Single Page Applications (SPAs) in React. It allows you to define routes for different views and navigate between them without full page reloads, providing a smooth user experience.', author: 'David' },
  { id: '5', title: 'Managing Forms with React State', content: 'Handling forms in React involves managing input values with state. Controlled components, where form data is handled by React state, ensure that the component is the single source of truth for input values, making validation and submission easier.', author: 'Eve' },
];

export default initialBlogPosts;
