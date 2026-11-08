import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const TravelContext = createContext(null);
const STORAGE_KEY = 'aura-travel-collection-v1';
const initial = { favorites: [], trip: [], notes: {}, dates: {} };

function loadSaved() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!raw || typeof raw !== 'object') return initial;
    return {
      favorites: Array.isArray(raw.favorites) ? raw.favorites : [],
      trip: Array.isArray(raw.trip) ? raw.trip : [],
      notes: raw.notes && typeof raw.notes === 'object' ? raw.notes : {},
      dates: raw.dates && typeof raw.dates === 'object' ? raw.dates : {},
    };
  } catch {
    return initial;
  }
}

export function TravelProvider({ children }) {
  const [saved, setSaved] = useState(loadSaved);
  const [toast, setToast] = useState('');

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); }
    catch { /* Browser may block storage. The UI still works for this session. */ }
  }, [saved]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const notify = useCallback((message) => setToast(message), []);
  const toggleFavorite = useCallback((id) => {
    const exists = saved.favorites.includes(id);
    setSaved((current) => ({ ...current, favorites: exists ? current.favorites.filter((item) => item !== id) : [...current.favorites, id] }));
    notify(exists ? 'Destino removido dos favoritos.' : 'Destino salvo nos favoritos.');
  }, [saved.favorites, notify]);

  const toggleTrip = useCallback((id) => {
    const exists = saved.trip.includes(id);
    setSaved((current) => ({ ...current, trip: exists ? current.trip.filter((item) => item !== id) : [...current.trip, id] }));
    notify(exists ? 'Destino removido do roteiro.' : 'Destino adicionado ao seu roteiro.');
  }, [saved.trip, notify]);

  const moveTrip = useCallback((id, direction) => {
    setSaved((current) => {
      const trip = [...current.trip];
      const from = trip.indexOf(id);
      const to = from + direction;
      if (from < 0 || to < 0 || to >= trip.length) return current;
      [trip[from], trip[to]] = [trip[to], trip[from]];
      return { ...current, trip };
    });
  }, []);

  const updateNote = useCallback((id, note) => {
    setSaved((current) => ({ ...current, notes: { ...current.notes, [id]: note } }));
  }, []);

  const updateDate = useCallback((id, date) => {
    setSaved((current) => ({ ...current, dates: { ...current.dates, [id]: date } }));
  }, []);

  const clearTrip = useCallback(() => {
    setSaved((current) => ({ ...current, trip: [], notes: {}, dates: {} }));
    notify('Roteiro limpo com sucesso.');
  }, [notify]);

  return <TravelContext.Provider value={{ ...saved, toggleFavorite, toggleTrip, moveTrip, updateNote, updateDate, clearTrip, notify }}>
    {children}
    {toast && <div className="toast" role="status" aria-live="polite"><span className="toast-dot" />{toast}</div>}
  </TravelContext.Provider>;
}

export function useTravel() {
  const ctx = useContext(TravelContext);
  if (!ctx) throw new Error('useTravel precisa de TravelProvider');
  return ctx;
}
