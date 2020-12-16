import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input,Button } from 'react-onsenui';
export default class Grandchild extends React.Component {
constructor(props) {
super(props);
this.clear = this.clear.bind(this);
}
incrementCount() {
this.props.incrementCount(); // AppのupdateFromChildを呼び出す
}
clear(){
  this.props.clear();
}
render() {
return (
<Card>
<div className="title">Grandchildコンポーネント</div>
<div className="content">
<div>Appから渡されたcount={this.props.count}</div>
<hr /> 
<Button modifier="large" onClick={this.clear}>clear</Button>
</div>
</Card>
);
}
}