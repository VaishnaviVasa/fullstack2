//conditional component
function Five()
{
    const val=false;
    return (
        <div>
            {val ? <h1>true</h1>:'this is false'}
        </div>
    );
}
export default Five;