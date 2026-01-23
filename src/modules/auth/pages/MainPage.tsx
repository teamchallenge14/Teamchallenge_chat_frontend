import { useAuthStore } from '../models/useAuthStore';

export const MainPage = () => {
  const { user } = useAuthStore();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
          marginBottom: '20px',
        }}
      >
        <h1>Q-Talk Chat</h1>
        <div style={{ marginRight: '15px' }}>
          <h1>User:</h1>
          <p>
            <strong>ID:</strong> {user?.id}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || 'Not specified'}
          </p>
          <p>
            <strong>Login:</strong> {user?.login || user?.userName || 'Anonym'}
          </p>
        </div>
      </header>

      <main>
        <h1>Welcome!</h1>
      </main>
    </div>
  );
};
