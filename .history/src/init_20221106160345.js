// 모든걸 초기화
import "./db";
import "./models/Video";

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} ❤️`);

app.listen(PORT, handleListening);
