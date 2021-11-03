 import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Visitor from './components/Visitor';
// import Count from './components/Count';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBinding from './EventBinding';
// import LifcycleA from './components/LifcycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import ParentComp from './ParentComp';
// import RefsComp from './components/Refs/RefsComp';
// import FocusInput from './components/Refs/FocusInput';
// import FRParentInput from './components/ForwardingRefs/FRParentInput';
// import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/ErroHandling/Hero';
import ErrorBoundary from './components/ErroHandling/ErrorBoundary';
import ClickCount from './ClickCount';
import HoverCount from './HoverCount';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import Counter from './components/RenderProps/Counter';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';
import PostList from './components/ReacrHttp/PostList';
import PostForm from './components/ReacrHttp/PostForm';

function App() {
  return (
    <div className="App">

      {/* REACT AND HTTP */}


        {/* HTTP get REQUEST */}
      {/* <PostList/> */}

        {/* HTTP POST REQUEST */}

      <PostForm/>

      {/* CONTEXT  */}

      {/* <UserProvider value="Precell" >
        <ComponentC/>
      </UserProvider> */}
      

      {/* RENDER PROPS TOPIC */}
      {/* <Counter>
        {(count, incrementCount)=>(
          <ClickCounterTwo count={ count } incrementCount={ incrementCount } />
        )}      
      </Counter>

      <Counter>
        {
          (count, incrementCount)=>(
            <HoverCounterTwo count={ count } incrementCount={ incrementCount }/>
          )
        }
      </Counter> */}
      {/* <Counter render={(count, incrementCount)=>(
        <ClickCounterTwo count={ count } incrementCount={ incrementCount } />
        )} 
      />
  

    <Counter render={(count, incrementCount) =>(
      <HoverCounterTwo count={ count } incrementCount={ incrementCount } />
    )}
    />   */}

     {/* <ClickCounterTwo/>     */}
     {/* <HoverCounterTwo/> */}
    {/* <User render={(isLoggedIn) => isLoggedIn ? "Precell" : "Guest"} />    */}
      {/* <ClickCount name="Precell"/>
      <HoverCount/> */}
     {/* <ErrorBoundary>       
        <Hero heroName='Batman'/>
      </ErrorBoundary>

      <ErrorBoundary>  
        <Hero heroName='Superman'/>
      </ErrorBoundary>

      <ErrorBoundary>  
        <Hero heroName='Joker'/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsComp/> */}
      {/* <ParentComp/> */}
      {/* <FragmentDemo/>
      <Table/> */}
      {/* <LifcycleA/> */}
      {/* <EventBinding /> */}

      {/* <FunctionClick/>
      <ClassClick/> */}
        {/* <Visitor/> */}

        {/* <Count/>    */}

      {/* PROPS IN functional component  */}

        {/* <Greet name='Tawanda' dept='Web development' hub='Kambuzuma'/> */}
        {/* <Greet name='Tanya' dept='Web development' hub='Dzivaresekwa'/>
        <Greet name='Precell' dept='Web development' hub='Dzivaresekwa'/> */}

      {/* PROPS IN class component  */}

        {/* <Welcome name='Tawanda' dept='Web development' hub='Kambuzuma'/>
        <Welcome name='Precell' dept='Web development' hub='Kambuzuma'/>
        
        <Welcome name='Tanya' dept='Web development' hub='Kambuzuma'/> */}
        {/* <Welcome name='Tanya' dept='Web development' hub='Kambuzuma'/>  */}
        {/* JUST A COMPONENT */}
        {/* <Hello/>  */}

        {/* STATES */}
    </div>
  );
}

export default App;
