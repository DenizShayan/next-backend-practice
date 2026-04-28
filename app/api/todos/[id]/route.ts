import { todos } from "../data";

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const id = Number(params.id);
    const body = await req.json();
  
    const todo = todos.find((t) => t.id === id);
  
    if (!todo) {
      return Response.json({ error: "Todo not found" }, { status: 404 });
    }
  
    if (body.text !== undefined) {
      todo.text = body.text;
    }
  
    if (body.done !== undefined) {
      todo.done = body.done;
    }
  
    return Response.json(todo);
  }