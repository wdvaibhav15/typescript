interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async (): Promise<void> => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Todo = await response.json();

        console.log(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Failed to fetch data:", error.message);
        } else {
            console.error("An unknown error occurred");
        }
    }
};

fetchData();