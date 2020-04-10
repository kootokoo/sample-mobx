import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Counter from "./Counter"


@observer
class CompositeComponent extends Component {
  render() {
    return (
        <div>
            <Counter/>
        </div>
    );
  }
}

export default CompositeComponent;