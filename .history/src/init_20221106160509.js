// 모든걸 초기화
import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;
console.log("current directory: ", process.cwd());

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} ❤️`);

app.listen(PORT, handleListening);
