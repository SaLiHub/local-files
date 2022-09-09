'use strict';

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
        class="my-input"
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

    return unsuitable == false ? <tr>{cells}</tr> : '';
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.sortControlling = this.sortControlling.bind(this);
    this.sortedData;
  }

  sorting(dir, name) {
    const data = this.props.fullContent;
    const arrayNames = data.map((obj) => obj[name]);
    if (dir === 'down') {
      arrayNames.sort(function sorting(a, b) {
        return b - a;
      });
    } else {
      arrayNames.sort(function sorting(a, b) {
        return a - b;
      });
    }

    this.sortedData = data.map((obj, index) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i][name] === arrayNames[index]) {
          return data[i];
        }
      }
    });
  }

  sortControlling(e) {
    const id = e.target.id;
    e.preventDefault();
    if (this.props.sortDirrection[id] === 'down') {
      this.props.onSortDirrectionChange('up', `${id}`);
      this.sorting('up', `${id}`);
    } else {
      this.props.onSortDirrectionChange('down', `${id}`);
      this.sorting('down', `${id}`);
    }
  }

  render() {
    const fullContent = this.sortedData || this.props.fullContent;

    const rows = fullContent.map((row) => <TableRow row={row} filterText={this.props.filterText} />);

    return (
      <table>
        <thead>
          <tr>
            <th onClick={this.sortControlling} id="place">
              Place
            </th>
            <th onClick={this.sortControlling} id="name">
              Name
            </th>
            <th onClick={this.sortControlling} id="firingRate">
              Firing Rate
            </th>
            <th onClick={this.sortControlling} id="score">
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
      sortDirrection: {
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
      sortDirrection: {
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
      <div>
        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
        <Table
          onSortDirrectionChange={this.handleSorting}
          sortDirrection={this.state.sortDirrection}
          headerContent={this.props.content[0]}
          fullContent={this.props.content}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

// connect to firebase database
const firebaseConfig = {
  apiKey: 'AIzaSyBVeT3JuMqOgvP8joNaKclC5ykbt1ybL0E',
  authDomain: 'sorting-table-fd4a3.firebaseapp.com',
  databaseURL: 'https://sorting-table-fd4a3-default-rtdb.firebaseio.com',
  projectId: 'sorting-table-fd4a3',
  storageBucket: 'sorting-table-fd4a3.appspot.com',
  messagingSenderId: '368922558232',
  appId: '1:368922558232:web:1b28fb6537a1fb4e9e686d',
};
// Initialize Firebase
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
    // render react dom after receiving data
    ReactDOM.render(<SortableTable content={data} />, document.getElementById('container'));
  });
