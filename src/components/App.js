import { lazy } from 'react';
import CustomerDetails from 'pages/CustomerDetails';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
import { Layout } from './Layout';

const Sales = lazy(() => import('../pages/Sales'));
const Customers = lazy(() => import('../pages/Customers'));
const Invoices = lazy(() => import('./Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
