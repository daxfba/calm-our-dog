import React, { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState(5);
  const [sessions, setSessions] = useState([]);
  const [dogName, setDogName] = useState('Buddy');
  const [streak, setStreak] = useState(0);

  const addSession = (success) => {
    const newGoal = success ? Math.ceil(goal * 1.025) : goal;
    const newStreak = success ? streak + 1 : 0;
    setSessions([...sessions, { time: Date.now(), success }]);
    setGoal(newGoal);
    setStreak(newStreak);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Calm Our Dog</h1>
      <h2>Welcome, {dogName}</h2>
      <p>Current Goal: {goal} seconds</p>
      <p>Longest Streak: {streak} days</p>
      <input value={dogName} onChange={(e) => setDogName(e.target.value)} placeholder="Dog's name" />

      <div style={{ marginTop: '2rem' }}>
        <h3>Training Session</h3>
        <p>Session Goal: {goal} seconds</p>
        <button onClick={() => addSession(true)}>✅ Success</button>
        <button onClick={() => addSession(false)} style={{ marginLeft: '1rem' }}>❌ Fail</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Recent Sessions</h3>
        <ul>
          {sessions.slice(-10).map((s, i) => (
            <li key={i}>
              {new Date(s.time).toLocaleString()} — {s.success ? '✅ Success' : '❌ Fail'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
