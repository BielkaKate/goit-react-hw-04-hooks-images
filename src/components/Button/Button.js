import s from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button className={s.Button} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

// class Button extends Component {
//   render() {
//     return (
//       <button className={s.Button} type="button" onClick={this.props.onClick}>
//         {this.props.text}
//       </button>
//     );
//   }
// }

export default Button;
