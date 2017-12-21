export default (props) => {
    const crypto = props.crypto || 'ETH';
    return (<div>
        <button onClick={() => {props.handleSelection(crypto)}}>{crypto}</button>
        </div>)
}