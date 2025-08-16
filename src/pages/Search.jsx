import React, { useEffect, useState } from "react";
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import JustButton from '../components/justButton';
import Cardsfc from '../components/Cardsfc';
import NoComplaintsYet from "../components/NoComplaintsYet";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000"

const Search = () => {
  const { t } = useTranslation();
  const [complaints, setComplaints] = useState([]);
  const [fingerprint, setFingerprint] = useState('');

  useEffect(() => {
    const getFingerprint = () => {
      const storedFingerprint = localStorage.getItem('fp');
      if (storedFingerprint) {
        setFingerprint(storedFingerprint);
      } else {
        const fp = `${navigator.userAgent}-${navigator.language}-${screen.width}x${screen.height}`;
        localStorage.setItem('fp', fp);
        setFingerprint(fp);
      }
    };

    getFingerprint();
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await fetch(`${API_BASE}/complaints/public`);
      const data = await res.json();
      setComplaints(data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  const handleLike = async (id, currentLikes, currentFingerprints = []) => {
    if (!fingerprint) return;

    const isLiked = currentFingerprints.includes(fingerprint);
    setComplaints(prev => prev.map(c => 
      c._id === id ? { 
        ...c, 
        likes: isLiked ? c.likes - 1 : c.likes + 1,
        likedFingerprints: isLiked
          ? c.likedFingerprints.filter(fp => fp !== fingerprint)
          : [...c.likedFingerprints, fingerprint]
      } : c
    ));

    try {
      await fetch(`${API_BASE}/complaints/${id}/like`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Fingerprint': fingerprint
        }
      });
    } catch (error) {
      console.error("Error liking complaint:", error);
      fetchComplaints();
    }
  };

  return (
    <Screen>
      <div className='w-90 sm:w-100 flex justify-between items-center mb-5'>
        <Heading prompt={t('12')}></Heading>
        <Link to={"/"}>
          <JustButton>{t('13')}</JustButton>
        </Link>
      </div>

      {complaints.length === 0 ? (
        <NoComplaintsYet />
      ) : (
        complaints.map(c => (
          <Cardsfc
            key={c._id}
            title={c.title}
            desc={c.desc}
            date={new Date(c.createdAt).toLocaleDateString()}
            likes={c.likes || 0}
            isLiked={fingerprint ? c.likedFingerprints?.includes(fingerprint) : false}
            onLike={() => handleLike(c._id, c.likes, c.likedFingerprints)}
          />
        ))
      )}
    </Screen>
  );
};

export default Search;
