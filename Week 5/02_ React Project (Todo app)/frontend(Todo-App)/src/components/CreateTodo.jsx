import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="title"
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}
            />
            <br /> <br />
            <input
                style={{
                    padding: 10,
                    margin: 10,
                }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            />
            <br /> <br />
            <button
                style={{
                    padding: 10,
                    margin: 10,
                }}
                onClick={async () => {
                    const result = await fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers : {
                            "Content-Type" : "application/json"
                        }
                    });
                    const json = await result.json();
                    alert("Todo Added");
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
