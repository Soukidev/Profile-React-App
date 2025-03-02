import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Sandra Johnas',
        bio: 'Full-stack developer with 5 years of experience in React and Node.js. Passionate about creating intuitive user interfaces and solving complex problems.',
        imgSrc: 'https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg', // Corrected URL
        profession: 'Software Engineer'
      },
      shows: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, timeInterval } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello 😊 !</h1>
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          
          <p>Time passed : {timeInterval} seconds</p>
          
          {shows && (
            <div className="profile-card">
              <img src={person.imgSrc} alt={person.fullName} />
              <h2>{person.fullName}</h2>
              <h3>{person.profession}</h3>
              <p>{person.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;