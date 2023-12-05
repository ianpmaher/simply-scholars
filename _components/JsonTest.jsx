export default async function JsonTest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    // console.log(data);

    return (
        <div>
            <h1>JSON Test</h1>
            <p>{data[0].title}</p>
            <p>{data[0].id}</p>
            <p>{data[1].title}</p>
            <p>{data[1].id}</p>
            <p>{data[2].title}</p>
            <p>{data[2].id}</p>
        </div>
    );
}