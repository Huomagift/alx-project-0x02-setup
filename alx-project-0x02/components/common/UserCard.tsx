// components/common/UserCard.tsx

import { UserProps } from '../../interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}
