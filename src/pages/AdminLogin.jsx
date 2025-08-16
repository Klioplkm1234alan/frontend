import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen';
import JustButton from '../components/justButton';
import { useTranslation } from 'react-i18next';

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const AdminLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        alert(t('38'));
        return;
      }

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        alert(t('38'));
      }
    } catch (error) {
      alert(t('38'));
      console.error(error);
    }
  };

  return (
    <Screen>
      <div className='p-6 w-90 m-auto bg-white shadow-sm rounded-xl flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center p-2 rounded-2xl bg-blue-100'>
            <img src="/Lock.svg" className='h-8 w-8' alt="" />
          </div>
          <h1 className='font-semibold text-center text-black mt-2'>{t('37')}</h1>
          <p className='text-[12px] text-gray-600 text-center mt-0.5'>{t('38')}</p>
        </div>

        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('39')}
          className='w-full bg-[hsl(210_40%_98%)] px-2 py-1 placeholder:text-[14px] rounded-xl border border-[hsl(214.3_31.8%_91.4%)]' 
        />

        <JustButton className="w-full" onClick={handleLogin}>{t('40')}</JustButton>
      </div>
    </Screen>
  );
};

export default AdminLogin;
