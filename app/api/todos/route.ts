let todos = [
    { id: 1, text: "Learn Next.js backend", done: false },
  ];
  
  export async function GET() {
    return Response.json(todos);
  }
  
  export async function POST(req: Request) {
    const body = await req.json();
  
    const newTodo = {
      id: Date.now(),
      text: body.text || "",
      done: false,
    };
  
    todos.push(newTodo);
  
    return Response.json(newTodo, { status: 201 });
  }