// Import React
import React from 'react';
// Images
import ReactLogo from './images/ReactIcon.svg';
import AncientCNN from './images/ancientCNN.png';
import ConfusedTravolta from './images/ConfusedTravolta.gif';
import Components from './images/Component.jpg';
import SamuraiCut from './images/SamuraiCut.gif';
import FullPage from './images/FullPage.png';
import FullPageCut from './images/FullPageCut.png';
import BeBeBe from './images/bebebe.gif';

import MPA001 from './images/MPA001.jpeg';
import MPA002 from './images/MPA002.jpeg';
import MPA003 from './images/MPA003.jpeg';
import MPAArchitecture from './images/mpaArchitecture.jpeg';
import MPALifeCycle from './images/mpaLifeCycle.jpeg';
import SPA001 from './images/SPA001.jpeg';
import SPA002 from './images/SPA002.jpeg';
import SPA003 from './images/SPA003.jpeg';
import SPAArchitecture from './images/spaArchitecture.jpeg';
import SPALifeCycle from './images/spaLifeCycle.jpeg';
import SWStateProps from './images/SWstate.png';
import PuppyAsk from './images/puppyAsk.gif';

// React examples
import { Button, Wrapper, Title } from './state.example';

// Import Spectacle Core tags
import {
  Link,
  CodePane,
  Deck,
  Heading,
  Image,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
  List,
  ListItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { Quack, data, LikeCount } from './Quack';
import { AvatarPhoto } from './atoms';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white', 
    secondary: '#063453', // navy
    tertiary: '#989FA5', // light gray
    quaternary: '#ED1848', // red
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="primary" a>
          <Heading margin="1rem 0" textColor="quaternary" size={2} bold>
            React Basics
          </Heading>
          <Layout>
            <Fill><Image height="300" src={ReactLogo}/></Fill>
          </Layout>
          <Heading margin="1rem 0" textColor="quaternary" size={6}>
            Lenka Vondráčková
          </Heading>
          <Heading margin="1rem 0" textColor="secondary" size={6} italic>
            vondrackova@cngroup.dk
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
            <Heading size={4} textColor="secondary">
            History of Web
          </Heading>
           <Fit><Image src={AncientCNN}/></Fit>
          <Link textColor="secondary" href="http://edition.cnn.com/EVENTS/1996/year.in.review/">
            http://edition.cnn.com/EVENTS/1996/year.in.review/
          </Link>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Multiple Page Application
          </Heading>
          <Layout>
            <Image height="350px" alt="MPA-Overview1" src={MPA001}/>
          </Layout>
          <Layout>
          <Fill><Image alt="MPA-Overview2" src={MPA002}/></Fill>
          <Fill><Image alt="MPA-Overview3" src={MPA003}/></Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            MPA: Architecture
          </Heading>
          <Fill><Image alt="MPA-Architecture" src={MPAArchitecture}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            MPA: Lifecycle
          </Heading>
          <Fill><Image alt="MPA-Lifecycle" src={MPALifeCycle}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            MPA: Pros & Cons 
          </Heading>

          <Text textColor="quaternary" bold>Pros</Text>
          <List>
            <ListItem>Easier to set SEO properly</ListItem>
            <ListItem>Good for simple apps with static content</ListItem>
          </List>
          <Text textColor="quaternary" bold>Cons</Text>
          <List>
            <ListItem>Backend-Frontend are coupled</ListItem>
            <ListItem>Dificult to maintain complex applications</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            MPA: Recap 
          </Heading>
          <Text margin="80px 0" textColor="quaternary">Static pages: every change = new request</Text>
          <Text margin="80px 0" textColor="secondary">CSS merely for colors, paddings and margins</Text>
          <Text margin="80px 0" textColor="quaternary">JavaScript only for simple dynamic changes</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Singe Page Application
          </Heading>
          <Layout>
            <Image height="350px" alt="SPA-Overview1" src={SPA001}/>
          </Layout>
          <Layout>
          <Fill><Image alt="SPA-Overview2" src={SPA002}/></Fill>
          <Fill><Image alt="SPA-Overview3" src={SPA003}/></Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            SPA: Architecture
          </Heading>
          <Fill><Image alt="SPA-Architecture" src={SPAArchitecture}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            SPA: Lifecycle
          </Heading>
          <Fill><Image alt="SPA-Lifecycle" src={SPALifeCycle}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            SPA: Pros & Cons 
          </Heading>
          <Text textColor="quaternary" bold>Pros</Text>
          <List>
            <ListItem>HTML + CSS + JS loaded once</ListItem>
            <ListItem>Less development time for complex applications</ListItem>
            <ListItem>Easier to debug</ListItem>
            <ListItem>Less communication between server and client - only data</ListItem>
          </List>

          <Text textColor="quaternary" bold>Cons</Text>
          <List>
            <ListItem>Proper SEO setup is complicated</ListItem>
            <ListItem>Heavy apps take longer to download (treeshake, chunking)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            SPA: Recap 
          </Heading>
          <Text margin="80px 0" textColor="quaternary">Web server returns only one page</Text>
          <Text margin="80px 0" textColor="secondary">Server only as a data provider</Text>
          <Text margin="80px 0" textColor="quaternary">Less (or zero) refreshes, less data transfer</Text>
          <Text margin="80px 0" textColor="secondary">More logic on the client side</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            How to do SPA?
          </Heading>
          <Image height="500px" alt="confused-travolta" src={ConfusedTravolta}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Component: Basic block of React architecture
          </Heading>
          <Image height="500px" alt="components" src={Components}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
          Component: Split the UI into independent, reusable pieces
          </Heading>
          <Fill><Image alt="full-page" src={FullPage}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center center">
        <Fill><Image height="500px" alt="samurai-with-katana" src={SamuraiCut}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Component: Think about each piece in isolation
          </Heading>
          <Fill><Image alt="full-page" src={FullPageCut}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            React: JSX 
          </Heading>
          <List textAlign="center">
            <ListItem>JS syntax extension</ListItem>
            <ListItem>XML-like syntax</ListItem>
          </List>
          <Layout>
            <CodePane theme="light" textSize="3rem" lang='jsx' source={`
      <h1 className="page-title">
        Home
      </h1>
            `}/>
          </Layout>
          <Title/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Component: Defined as Function or Class
          </Heading>
          <Text textColor="quaternary"> Class </Text>
          <CodePane theme="light" textSize="1.8rem"  lang='jsx' source={`
            class Welcome extends React.Component {
              render() {
                return <h1>{this.props.title}</h1>;
              }
            }
          `}/>
          <Layout>
          <Fill>
          <Text textColor="quaternary"> Function </Text>
          <CodePane  theme="light" textSize="1.8rem"  lang='jsx' source={`
function Welcome(props) {
  return (
    <h1>{props.title}</h1>
  );
}`}/>
          </Fill>
          <Fill>
          <Text textColor="quaternary"> Arrow function </Text>
          <CodePane  margin={'0px 0px 0px 5px'} theme="light" textSize="1.8rem" lang='jsx' source={`
const Welcome = ({ title }) => 
  <h1>{title}</h1>;


          `}/>
          </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Conponent: Recap
          </Heading>
          <Text margin="150px 0" bold textColor="quaternary"> 
          What is true about React components? 
          </Text>
          <Text margin="100px 0" textColor="secondary"> 
          a) written in HTML, large, coupled, complex
          </Text>
          <Text margin="100px 0" bold textColor="secondary"> 
          b) reusable, isolated, idependent, small, written in JSX, stateless or statefull
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center center">
        <Fill><Image height="500px" alt="b-is-correct" src={BeBeBe}/></Fill>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Conponent: Example stateless - no logic
          </Heading>
          <Text margin="100px 0" bold textColor="secondary"/> 
          <Quack quack={data} onLikePress={()=>{}}/>
          <Text margin="100px 0" bold textColor="secondary"/> 
          <Layout>
            <AvatarPhoto src={data.user.profileImageUrl} alt="lvn"/>
            <CodePane theme="light" textSize="1.5rem"  lang='jsx' source={`const AvatarPhoto = ({src, alt}) => (
  <img
    src={src}
    alt={alt}
    style={{ height: '10rem', width: '10rem', }}
  />)`}/>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            Conponent: Example stateless - with logic & callback
          </Heading>
          <Text margin="50px 0" bold textColor="secondary"/> 
          <Quack quack={data} onLikePress={()=>{}}/>
          <Text margin="50px 0" bold textColor="secondary"/> 
          <Layout >
            <LikeCount liked likeCount={399} alt="lvn"/>
            <Fill>
            <CodePane theme="light" textSize="1.5rem"  lang='jsx' source={`const const LikeCount = ({liked, quack, likeCount, onLikePress}) => (
  <TransparentButton
    onClick={() => {
      if (!onLikePress) return;
      onLikePress(quack);
    }}
    >
    <FontAwesomeIcon
      icon={liked ? faHeartSolid : faHeartRegular}
    />{' '}
    {likeCount}
  </TransparentButton>
);`}/></Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={3} textColor="secondary">
            React: Props
          </Heading>
          <Text margin="50px 0" bold textColor="secondary"/> 
          <List>
            <ListItem>passed from parent component</ListItem>
            <ListItem>can pass anything: values, objects, functions or components</ListItem>
            <ListItem>read only (no re-assignments)</ListItem>
            <ListItem>change in props will trigger rerender</ListItem>
          </List>
          <Text margin="50px 0" bold textColor="secondary"/> 
          <CodePane theme="light" textSize="1.5rem"  lang='jsx' source={`
      const LikeCount = ({liked, quack, likeCount, onLikePress}) => (
        <TransparentButton
          onClick={() => {
            if (!onLikePress) return;
            onLikePress(quack);
          }}
          >
          ...
        </TransparentButton>
      );
      `}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Heading size={5} textColor="secondary">
            React: passing props 'Child'
          </Heading>
          <Wrapper />
          <CodePane theme="light" textSize="1.5rem" margin="10px 0" lang="jsx" source={`
            const ButtonStateless = ({ title, background, onClickReaction}) => (
              <button
                style={{ ...styles, background }}
                onClick={onClickReaction}
              >
                {title}
              </button>
            );
          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" >
          <Heading size={5} textColor="secondary">
            React: passing props 'Parent'
          </Heading>
          <Wrapper />
          <Text alignSelf="flex-start" size={6} textColor="secondary" />
          <CodePane theme="light" textSize="1.5rem" margin="10px 0" lang="jsx" source={`
                ...
                  const [background, setBackground] = useState('hotpink')
                  ...
                    <ButtonStateless
                      title="I am stateless"
                      background={background}
                      onClickReaction={
                        () => setBackground({ background: this.generateColor() })
                      }
                    />
                  ...
          `}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            React: State with Hooks
          </Heading>
          <List>
            <ListItem>private and fully controlled by the component</ListItem>
            <ListItem>initialise state hook in the parent</ListItem>
            <ListItem>change in state will trigger rerender</ListItem>
          </List>
          <CodePane theme="light" textSize="1.5rem"  lang='jsx' source={`
            ...
            //initialize [value, modifier] = useState(initialValue) 
            const [background, setBackground] = useState('hotpink')
            ...
              <ButtonStateless
                title="I am stateless"
                background={background}
                onClickReaction={
                  () => setBackground({ background: this.generateColor() })
                }
              />
            ...
          `}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            React: Hooks for state management
          </Heading>
          <Text margin="50px 0" bold textColor="secondary"> 
            
          </Text>

          <CodePane theme="light" textSize="1.5rem"  lang='jsx' source={`
            function ExampleWithManyStates() {
              // Declare multiple state variables!
              const [age, setAge] = useState(42);
              const [fruit, setFruit] = useState('banana');
              const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
              // ...
            }
          `}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={5} textColor="secondary">
            React: State with setState
          </Heading>
          <Layout>
            <Fill>
              <CodePane theme="light" textSize="1.3rem" margin="25px 0" lang="jsx" source={`<Button title="Click Me To Change Color!" />`} />
            </Fill>
            <Fill><Button title="Click Me To Change Color!" /></Fill>
          </Layout>
          <CodePane theme="light" textSize="1.3rem" lang="jsx" source={`
            class Button extends React.Component {
              constructor(props) {
                super(props)
                this.state = { background: "hotpink" };
              }
              render() {
                return (
                  <button
                    style={{ ...styles, background: this.state.background }}
                    onClick={() => this.setState({ background: this.generateColor() })}
                  >
                    {title}
                  </button>
                )
              }
            }
          `}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center flex-start">
          <Heading size={4} textColor="secondary">
            State & Props Recap
          </Heading>
          <Text margin="100px 0" bold textColor="secondary"/> 
          <Image alt="star-wars-state" src={SWStateProps}/>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" >
          <Image alt="puppy" src={PuppyAsk}/>
        </Slide>
      </Deck>
    );
  }
}
