const server = require("./app");
const { conn } = require("./db");
const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await conn.sync({ alter: true });
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database sync failed:', error);
    return;
  }
  server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

startServer();
