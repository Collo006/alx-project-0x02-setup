// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-700">📧 {email}</p>
      <p className="text-sm text-gray-600 mt-2">
        📍 {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
