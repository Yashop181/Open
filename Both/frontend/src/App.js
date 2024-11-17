import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My First App!</h1>
      </header>
      
      <section>
        <h2>About This App</h2>
        <p>This is a simple React app to get started with React. You can add more features and customize it as you learn more!</p>
      </section>
      
      <section>
        <h2>Features</h2>
        <ul>
          <li>Simple React Setup</li>
          <li>Easy to understand structure</li>
          <li>Great starting point for new projects</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>If you have any questions, feel free to reach out at: <a href="mailto:example@example.com">example@example.com</a></p>
      </section>

      <footer>
        <p>&copy; 2024 My First App</p>
      </footer>
    </div>
  );
};

export default App;
