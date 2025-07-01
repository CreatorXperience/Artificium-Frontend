export type UserStatus = "online" | "offline" | "away" | "dnd";

export type User = {
  name: string;
  status: UserStatus;
  image: string;
  activity?: string;
  location?: string;
};


// import { User } from "../types/user";

export const useUsers = (): User[] => [
  {
    name: "Adam Green",
    status: "online",
    activity: "Exploring",
    location: "Library",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
  },
  {
    name: "Adam Green",
    status: "online",
    activity: "Exploring",
    location: "Library",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image: "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image: "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image: "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image: "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image: "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Luke Sky",
    status: "away",
    activity: "Away",
    location: "for 20 mins",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    name: "Jane Doe",
    status: "dnd",
    activity: "Do not disturb",
    location: "Studio",
    image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
  },
];

export default useUsers;
