import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input,Button } from 'react-onsenui';
import Grandchild from 'Grandchild.jsx';
export default class Child extends React.Component {
constructor(props) {
super(props);
this.decrementCount = this.decrementCount.bind(this);
}
decrementCount() {
this.props.decrementCount(); // AppのupdateFromChildを呼び出す
}
render() {
return (
<Card>
<div className="title">Childコンポーネント</div>
<div className="content">
<div>Appから渡されたcount={this.props.count}</div>
<hr />
<Button modifier="large" onClick={this.decrementCount}>Down</Button>
<Grandchild count={this.props.count} clear={this.props.clear} />
</div>
</Card>
);
}
}