import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useFirebaseApp } from "../providers/firebase/hooks";
import { useEffect, useState } from "react";
import { listItemConverter, type ListItem } from "../types/ListItem";

const ItemList = () => {
  const { app } = useFirebaseApp();

  const [listItems, setListItems] = useState<(ListItem & { id: string })[]>([]);

  if (!app) {
    return <p>"No Firebase app available"</p>;
  }

  const db = getFirestore(app);

  useEffect(() => {
    const fetchListItems = async () => {
      const querySnapshot = await getDocs(
        collection(db, "list_items").withConverter(listItemConverter)
      );
      const newListItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListItems(newListItems);
    };

    fetchListItems();
  }, [db]);

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>{`${item.label} -> ${item.checked}`}</li>
      ))}
    </ul>
  );
};

export default ItemList;
