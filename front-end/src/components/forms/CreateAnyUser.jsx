import React, { useState } from 'react';

export default function CreateAnyUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

  return (
    <form>
      <input
        data-testid="admin_manage__input-name"
        type="text"
        placeholder="Name"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <input
        data-testid="admin_manage__input-email"
        type="text"
        value={ email }
        placeholder="Email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        data-testid="admin_manage__input-password"
        type="text"
        value={ password }
        placeholder="Password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <select
        data-testid="admin_manage__select-role"
        value={ role }
        onChange={ ({ target }) => setRole(target.value) }
      >
        <option selected value="customer">customer</option>
        <option value="seller">seller</option>
        <option value="administrator">administrator</option>
      </select>
      <button
        data-testid="admin_manage__button-register"
        type="submit"
      >
        Cadastrar

      </button>
    </form>
  );
}
