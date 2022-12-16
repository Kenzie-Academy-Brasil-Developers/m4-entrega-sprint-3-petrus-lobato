import app from "./app";
import { startDatabase } from "./database";

export default app.listen(3000, async () => {
   await startDatabase();
   console.log("Server running in port 3000");
});