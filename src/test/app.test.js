import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const renderHome = () => render(<App />);

describe('User can see Navbar at Screen', () => {
  test('user can see title navbar', () => {
    renderHome();

    expect(screen.getByText('Website Test Sabi')).toBeInTheDocument();
  });

  test('user can see menus', () => {
    renderHome();

    expect(screen.getByText('Homepage')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

describe('User can see Content', () => {
  test('user can see title', () => {
    renderHome();
    expect(screen.getByText('This Is Homepage')).toBeInTheDocument();
  });

  test('user can see about1 and about1', () => {
    renderHome();

    expect(screen.getByText('About 1')).toBeInTheDocument();
    expect(screen.getByText('About 2')).toBeInTheDocument();
  });
});

describe('User can see section phone number', () => {
  test('user can input phone number', () => {
    renderHome();
    const input = screen.getByLabelText('input');
    fireEvent.change(input, { target: { value: '0266-232323' } });
    expect(input.value).toBe('0266-232323');
  });

  test('user cannot input phone number with char', () => {
    renderHome();
    const input = screen.getByLabelText('input');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input.value).toBe('');
  });

  test('user can click button Go', () => {
    renderHome();

    const input = screen.getByLabelText('input');
    const button = screen.getByText('Go');

    fireEvent.change(input, { target: { value: '0266-232323' } });
    fireEvent.click(button);

    expect(screen.getByText('0266-232323')).toBeInTheDocument();
  });
});
