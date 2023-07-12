import './BotonClean.css';

function BotonClean(props) {
  return <div className='boton-clean' onClick={props.clean}>{props.children}</div>;
}

export default BotonClean;