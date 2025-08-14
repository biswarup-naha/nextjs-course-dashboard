import postgres from "postgres";

interface IUser{
    email: string,
    password: string 
}
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const loginHelper=async ()=>{
        const data = await sql`
        SELECT 
        FROM 
        JOIN 
        WHERE ;
      `;
    
        return data;
}

export async function login(payload: IUser) {
    try {
        return Response.json(await loginHelper());
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}