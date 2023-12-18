import { json } from "@sveltejs/kit";
import { getGelbooruData } from "./gelboordle";

export async function GET() {

      const response = await getGelbooruData();
      console.log(response)

      return new Response(JSON.stringify(response));
  }