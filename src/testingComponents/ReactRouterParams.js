// No need to pay attention to the code below this comment. You have learned to use 'import' to bring in components from libraries in your React project. This is another way to do it that works better in Codepen. HashRouter is also used here instead of BrowserRouter due to Codepen. Do not be concerned about the differences. 
const { HashRouter, Switch, Route, Link } = ReactRouterDOM

// The code you should pay attention to begins after this comment.

const ALBUMSDATA = [
  { 
    id: 1, 
    title: "Mezzanine", 
    artist: "Massive Attack", 
    year: 1998,
    description: "Fresh off the block hard metal, from south America.",
    url: "Mucha inspired artwork"
  },
  { 
    id: 2, 
    title: "The Ruminant Band", 
    artist: "Fruit Bats", 
    year: 2009,
    description: "Fruity Tooty fresh and Fruity",
    url: "Rembrant inspired"
  },
    { 
    id: 3, 
    title: "Elepant", 
    artist: "White Stripes", 
    year: 2008,
    description: "A detroit rock band inspirsed by the art deco period.",
    url: "Art deco inspired"
  }
];

function Home() {
  return (
    <h1>Home</h1>
  );
}

function Albums(props) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {props.albumsData.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`} >           
                Album {album.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

//random album
function RandomAlbum(props) {
    return (
        <div>
            <h1>Album of the day</h1>
            <div>
                {props.albumsData. }
            </div>
        </div>
    );

}

function MyNav() {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/albums'>Albums</Link></li>
      <li><Link to='/random'>Random band</Link></li>
    </ul>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA,
    };
  };
  
  render() {
    
    const AlbumInfo = ({match}) => {
      const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
      return (
        <div>
          {album.title} - {album.artist} - {album.year} - {album.description}
        </div>
      );
    };


    return (
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/albums/:albumId' component={AlbumInfo}/>
       <Route exact path='/albums' render={() => <Albums albumsData={this.state.albumsData} />} />        
      </Switch>
    );
  };
}

function App() {
  return (
    <div>
      <MyNav />
      <br />
      <Main />
    </div>
  );
}

// Stop paying attention here. Below code is just to make React Router work with Codepen.
// We are using HashRouter here, but outside of here you would use BrowserRouter for a web app.
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));