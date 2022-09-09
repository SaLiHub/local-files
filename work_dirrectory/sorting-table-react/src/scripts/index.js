import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    return (
      <input
        className="my-input"
        type="text"
        id="my-input"
        placeholder="Search for names.."
        title="Type in a name"
        onChange={this.handleFilterTextChange}></input>

    );
  }
}

class TableRow extends React.Component {
  render() {
    const cellsData = this.props.row,
      filterText = this.props.filterText,
      properOrder = ['place', 'name', 'firingRate', 'score'],
      cells = [];

    let unsuitable = false;
    if (filterText) {
      const lowerCaseStat = cellsData.name.toLowerCase();
      const lowerCaseFilterText = filterText.toLowerCase();
      lowerCaseStat.indexOf(lowerCaseFilterText) === -1 ? (unsuitable = true) : (unsuitable = false);
    }

    properOrder.forEach((name) => {
      cells.push(<td>{cellsData[name]}</td>);
    });

    return unsuitable === false ? <tr>{cells}</tr> : '';
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.sortControlling = this.sortControlling.bind(this);
    this.sortedData;
  }

  sorting(dir, value) {
    const data = this.props.fullContent;
    // Get the values needed sorting from content data
    // and put in arrayNames.
    const arrayNames = data.map((obj) => obj[value]);
    if (value === 'name' && dir === 'up') {
      if (dir === 'up') {
        arrayNames.sort();
      } else {
        arrayNames.reverse();
      }
    } else if (value !== 'name' && dir === 'down') {
      arrayNames.sort(function sorting(a, b) {
        return b - a;
      });
    } else {
      arrayNames.sort(function sorting(a, b) {
        return a - b;
      });
    }
    // Create new sorted data.
    this.sortedData = data.map((obj, index) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i][value] === arrayNames[index]) {
          return data[i];
        }
      }
    });
  }

  sortControlling(e) {
    // Check pressed key.
    if (e.code !== undefined && e.code !== 'Enter') {
      return;
    }
    const id = e.target.id;
    e.preventDefault();
    if (this.props.sortDirection[id] === 'down') {
      this.props.onSortDirectionChange('up', `${id}`);
      this.sorting('up', `${id}`);
    } else {
      this.props.onSortDirectionChange('down', `${id}`);
      this.sorting('down', `${id}`);
    }
  }

  render() {
    const fullContent = this.sortedData || this.props.fullContent;

    const rows = fullContent.map((row) => <TableRow row={row} filterText={this.props.filterText} />);

    return (
      <table className="sort-table">
        <thead>
          <tr>
            <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="place" tabIndex="0">
              Place
            </th>
            <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="name" tabIndex="0">
              Name
            </th>
            <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="firingRate" tabIndex="0">
              Firing Rate
            </th>
            <th onClick={this.sortControlling} onKeyPress={this.sortControlling} id="score" tabIndex="0">
              Score
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      sortDirection: {
        place: '',
        firingRate: '',
        name: '',
        score: '',
      },
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(dir, name) {
    this.setState({
      sortDirection: {
        [name]: `${dir}`,
      },
    });
  }

  handleFilterTextChange(text) {
    this.setState({
      filterText: text,
    });
  }
  render() {
    return (
      <>
        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <Table
          onSortDirectionChange={this.handleSorting}
          sortDirection={this.state.sortDirection}
          headerContent={this.props.content[0]}
          fullContent={this.props.content}
          filterText={this.state.filterText}
        />
      </>
    );
  }
}

// Connect to firebase database.
const firebaseConfig = {
  apiKey: 'AIzaSyBVeT3JuMqOgvP8joNaKclC5ykbt1ybL0E',
  authDomain: 'sorting-table-fd4a3.firebaseapp.com',
  databaseURL: 'https://sorting-table-fd4a3-default-rtdb.firebaseio.com',
  projectId: 'sorting-table-fd4a3',
  storageBucket: 'sorting-table-fd4a3.appspot.com',
  messagingSenderId: '368922558232',
  appId: '1:368922558232:web:1b28fb6537a1fb4e9e686d',
};
// Initialize Firebase.
firebase.initializeApp(firebaseConfig);

function databaseInit() {
  return firebase.database().ref('/').once('value');
}

let data;
databaseInit()
  .then((answer) => {
    data = answer.val();
  })
  .then(() => {
    // Render react dom after receiving data.
    ReactDOM.render(<SortableTable content={data} />, document.getElementById('container'));
  });
