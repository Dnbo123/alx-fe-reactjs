import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from './components/NavigationComponent.jsx';
import PostsComponent from './components/PostsComponent.jsx'
import { Component } from 'react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Query Demo in React</h1>
        <Navigation />
        <PostsComponent/>
      </div>
     
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;