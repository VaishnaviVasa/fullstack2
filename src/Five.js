//conditional component
function Five()
{
    const val=false;//by giving here value true or false it displays in the return statement
    return (
        <div>
            {val ? <h1>true</h1>:'this is false'}
        </div>
    );
}
export default Five;