import React, { useState, useEffect } from "react";
import AdminHeading from '../components/AdminHeading';
import Screen from '../components/Screen';
import AdminButton from '../components/adminButton';
import CardFrAdmin from '../components/cardFrAdmin';
import NoNeedForThisCardJFS from '../components/NoNeedForThisCardJFS';
import { useTranslation } from 'react-i18next';

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const Admin = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("pending");
  const [pendingComplaints, setPendingComplaints] = useState([]);
  const [privateComplaints, setPrivateComplaints] = useState([]);

  const fetchPending = async () => {
    try {
      const res = await fetch(`${API_BASE}/complaints?status=pending`);
      const data = await res.json();
      setPendingComplaints(data);
    } catch (error) {
      console.error(t('Failed to fetch pending complaints:'), error);
    }
  };

  const fetchPrivate = async () => {
    try {
      const res = await fetch(`${API_BASE}/complaints?status=private`);
      const data = await res.json();
      setPrivateComplaints(data);
    } catch (error) {
      console.error(t('Failed to fetch private complaints:'), error);
    }
  };

  useEffect(() => {
    fetchPending();
    fetchPrivate();
  }, []);

  const approveComplaint = async (id) => {
    await fetch(`${API_BASE}/complaints/${id}/approve`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("adminToken")
      }
    });
    fetchPending();
  };

  const rejectComplaint = async (id) => {
    await fetch(`${API_BASE}/complaints/${id}/reject`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("adminToken")
      }
    });
    fetchPending();
  };

  return (
    <>
      <Screen>
        <AdminHeading
          svg={"/shield.svg"}
          text1={t('41')}
          text2={t('42')}
        />

        <div className='bg-[#F1F5F9] p-1 min-h-10 w-90 sm:w-100 lg:w-170 rounded-xl flex gap-1 mb-3.5'>
          <AdminButton
            prompt={t('43')}
            sorc={"/eye.svg"}
            isActive={activeTab === "pending"}
            onClick={() => setActiveTab("pending")}
          />
          <AdminButton
            prompt={t('44')}
            sorc={"/privateShield.svg"}
            isActive={activeTab === "private"}
            onClick={() => setActiveTab("private")}
          />
        </div>

        {activeTab === "pending" && (
          <>
            <NoNeedForThisCardJFS
              first={t('45')}
              second={t('46')}
            />
            {pendingComplaints.length === 0 ? (
              <p>{t('47')}</p>
            ) : (
              pendingComplaints.map(({ _id, title, desc, createdAt, status }) => (
                <CardFrAdmin
                  key={_id}
                  id={_id}
                  title={title}
                  desc={desc}
                  date={new Date(createdAt).toLocaleDateString()}
                  status={status}
                  approveComplaint={approveComplaint}
                  rejectComplaint={rejectComplaint}
                />
              ))
            )}
          </>
        )}

        {activeTab === "private" && (
          <>
            <NoNeedForThisCardJFS
              first={t('48')}
              second={t('49')}
            />
            {privateComplaints.length === 0 ? (
              <p>{t('50')}</p>
            ) : (
              privateComplaints.map(({ _id, title, desc, createdAt, status }) => (
                <CardFrAdmin
                  key={_id}
                  id={_id}
                  title={title}
                  desc={desc}
                  date={new Date(createdAt).toLocaleDateString()}
                  status={status}
                />
              ))
            )}
          </>
        )}
      </Screen>
    </>
  );
};

export default Admin;
