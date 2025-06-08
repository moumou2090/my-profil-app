import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      timeSinceMount: 0,
      person: {
        fullName: 'Arya Stark',
        bio: 'Je suis une guerrière de Winterfell',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/3/39/Arya_Stark-Maisie_Williams.jpg',
        profession: 'Assassin'
      }
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
      timeSinceMount: 0
    }));
  };

  render() {
    const { show, person, timeSinceMount } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <h1>Mon premier composant classe</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Cacher' : 'Afficher'} le profil
        </button>

        {show && (
          <div style={{ marginTop: 20 }}>
            <img
              src={person.imgSrc}
              alt="person"
              style={{ width: '200px', borderRadius: '10px' }}
            />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Bio:</strong> {person.bio}</p>
          </div>
        )}

        <p style={{ marginTop: 20 }}>
          Temps écoulé depuis le montage : {timeSinceMount} secondes
        </p>
      </div>
    );
  }
}

export default App;

