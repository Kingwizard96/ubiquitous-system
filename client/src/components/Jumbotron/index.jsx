export default function Jumbotron({ children }) {
    return (
        <div
        style={{ height: 300, clear: 'both', paddingTop: 120, textAlign: 'center' }}
        className='jumbotron'
        >
        {children}
        </div>
    );
}
