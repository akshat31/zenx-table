import './table.css'

const FlexiTable = ({ data = [], colDef = []}) => {
    return (
        <table>
            <thead>
                <tr>
                    {colDef.map((def) => <th>{def?.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return <tr>{colDef.map((key) => {
                        return <td>{item[key.key]}</td>
                    })}</tr>
                })}
            </tbody>
        </table>
    );
}

export default FlexiTable;
