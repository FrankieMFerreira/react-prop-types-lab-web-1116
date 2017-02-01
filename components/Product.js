import React from 'react'

class Product extends React.Component {
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'false' : `${this.props.hasWatermark}`}</li>
          <li>{this.props.size}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName, component){
    if (!(props[propName])){
      return new Error(`missing`)
    }
    if (typeof props[propName] != 'number'){
      return new Error("Weight is not a number")
     }
    if (props[propName] < 80 || props[propName] > 300){
      return new Error(`Weight must be greater than 80 and less than 300.`)
    }
  }
};

module.exports = Product;
