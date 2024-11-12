import express =  require('express');
import personalRoutes from './routes/personalRoutes';
const app = express();
const PORT = 3001;
//asddddklsdklfsjdfjs
app.use(express.json());
app.use('/api/personal',personalRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} http://localhost:3001/`);
});