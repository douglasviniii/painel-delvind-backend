import express from 'express';
import dotenv from 'dotenv';
import Database from './DataBase/DataBase';
import cors from 'cors';

import EmployeeRoute from './Routes/EmployeeRoute';
import AdminRoute from './Routes/AdminRoute';
import ReportEmployeeRoute from './Routes/ReportEmployeeRoute';
import TaskRoute from './Routes/TaskRoute';
import CalledRoute from './Routes/CalledRoute';
import NotificationsRoute from './Routes/NotificationsRoute';
import ReportAdminRoute from './Routes/ReportEmployeeRouteAdmin';
import TeamRoute from './Routes/TeamRoute';
import PaymentRoute from './Routes/PaymentRoute';
import BudgetRoute from './Routes/BudgetRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'https://painel-delvind-frontend-9483ly5x1.vercel.app'
}));

app.use('/employee', EmployeeRoute); //colaborador
app.use('/admin', AdminRoute); //administrativo
app.use('/reportemployee', ReportEmployeeRoute); //relatorio do colaborador
app.use('/task', TaskRoute); //tarefas
app.use('/called', CalledRoute); //chamados
app.use('/notifications', NotificationsRoute); //notificações
app.use('/reportadmin', ReportAdminRoute); //relatorio do adm
app.use('/team',TeamRoute); //equipe
app.use('/payment',PaymentRoute);
app.use('/budget', BudgetRoute);

app.listen(port, async () => {
    await Database();
    console.log(`Servidor rodando na porta ${port}`);
});