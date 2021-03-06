//jshint esversion:6

import React from 'react';
import './index.css';


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      order: 1,
      showList: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showOrHideList = this.showOrHideList.bind(this);
    this.crossOrUncrossItem = this.crossOrUncrossItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({term: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();

    let newItem = {
      id: this.state.order,
      text: this.state.term,
      isCrossedOut: false,
    };

    if (this.state.term !== "") {
      this.setState({
        term: "",
        items: [...this.state.items, newItem],
        order: this.state.order + 1,
      });
    }
  }

  deleteItem(id) {
    let update = this.state.items.filter(el => el.id !== id);
    this.setState({
      items: update,
    });
  }

  showOrHideList() {
    this.setState({
      showList: !this.state.showList,
    });
  }

  crossOrUncrossItem(id) {
    let currItem = this.state.items.filter(el => el.id === id);
    let update = this.state.items.filter(el => el.id !== id);
    currItem[0].isCrossedOut = !currItem[0].isCrossedOut
    update = update.concat(currItem);
    this.setState({
      items: update,
    });
  }

  handleClick(event) {
    console.log(event.target);
  }

  render() {
    if (this.state.showList) {
      return (
        <div className="t-body">
          <div className="to-do-list">
            <div className="header">
              <h2 className="title" onClick={this.showOrHideList}>To Do List</h2>
              <CreateNew value={this.state.term} onChange={this.onChange} onSubmit={this.onSubmit}/>
            </div>
            <ListItems handleClick={this.handleClick} items={this.state.items} crossOrUncrossItem={this.crossOrUncrossItem} onDelete={this.deleteItem}/>
          </div>
        </div>
      );
    }
    return (
      <div className="t-body">
        <div className="to-do-list hidden">
          <div className="header" onClick={this.showOrHideList}>
          <h2 className="title">To Do List</h2>
          <CreateNew value={this.state.term} onChange={this.onChange} onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

function CreateNew(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input className="input-text" value={props.value} onChange={props.onChange} />
      <button className="btn add-btn">+</button>
    </form>
  );
}

function ListItems(props) {
  return (
    <ul className="list">
      {props.items.map((item) => (
        <li className={`item ${(item.isCrossedOut)? "crossed-out" : ""}`} key={item.id}><button className="btn" onClick={() => props.onDelete(item.id)}>-</button> <span onClick={() => props.crossOrUncrossItem(item.id)}> {item.text}</span></li>
      ))}
    </ul>
  )
}

export default ToDoList;
