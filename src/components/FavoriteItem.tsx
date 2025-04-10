import { FavoriteJoke } from '../lib/favorites';

interface FavoriteItemProps {
  item: FavoriteJoke;
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}

export default function FavoriteItem({
  item,
  onRemove,
  onRate,
}: FavoriteItemProps) {
  return (
    <tr className="border-b w-full">
      <td className="p-2">{item.joke}</td>
      <td className="p-2 text-center flex flex-nowrap justify-center align-middle">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRate(item.id, star)}
            className={`px-1 ${item.rating && item.rating >= star ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            ★
          </button>
        ))}
      </td>
      <td className="p-2">
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 border-2 text-white rounded hover:cursor-pointer"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
